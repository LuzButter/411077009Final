from flask import Flask, jsonify
import pandas as pd
import numpy as np
from scipy import stats

app = Flask(__name__)

# 載入並清理資料
file_path = 'F:/OT_Project/playStoreAnalysis/analysis_app/PY/googleplaystore.csv'
df = pd.read_csv(file_path)

def clean_data(df):
    df = df.dropna(subset=['Size', 'Installs'])
    def convert_size(size):
        if 'M' in size:
            return float(size.replace('M', ''))
        elif 'Varies with device' in size:
            return float(size.replace('Varies with device', '0M'))
        elif 'k' in size:
            return float(size.replace('k', '')) / 1024
        else:
            return np.nan
    df['Size'] = df['Size'].apply(convert_size)
# 將 '+' 和 ',' 替換為空字符串
df['Installs'] = df['Installs'].str.replace('+', '').str.replace(',', '')

# 將數據轉換為浮點數，並在無法轉換時設置為 NaN
df['Installs'] = pd.to_numeric(df['Installs'], errors='coerce')

# 將 NaN 值填充為 0.0
df['Installs'].fillna(0.0, inplace=True)

# df = clean_data(df)

# 保存清理後的資料回原有檔案
df.to_csv(file_path, index=False)

@app.route('/api/category_distribution')
def category_distribution():
    category_distribution = df['Category'].value_counts().to_dict()
    return jsonify(category_distribution)

@app.route('/api/average_rating')
def average_rating():
    average_rating = df['Rating'].mean()
    return jsonify({'average_rating': average_rating})

@app.route('/api/good_bad_apps')
def good_bad_apps():
    good_apps = df[df['Rating'] == df['Rating'].max()].to_dict(orient='records')
    bad_apps = df[df['Rating'] == df['Rating'].min()].to_dict(orient='records')
    return jsonify({'good_apps': good_apps, 'bad_apps': bad_apps})

@app.route('/api/anova_test')
def anova_test():
    anova_result = stats.f_oneway(*(df[df['Category'] == category]['Rating'].dropna() for category in df['Category'].unique()))
    return jsonify({'anova_statistic': anova_result.statistic, 'anova_pvalue': anova_result.pvalue})

@app.route('/api/size_rating')
def size_rating():
    size_rating_corr = df[['Size', 'Rating']].dropna().corr().to_dict()
    return jsonify(size_rating_corr)

@app.route('/api/free_paid_rating')
def free_paid_rating():
    df['Type'] = df['Type'].fillna('Free')
    free_apps = df[df['Type'] == 'Free']
    paid_apps = df[df['Type'] == 'Paid']
    free_vs_paid_rating = {'free': free_apps['Rating'].mean(), 'paid': paid_apps['Rating'].mean()}
    return jsonify(free_vs_paid_rating)

@app.route('/api/category_free_paid')
def category_free_paid():
    category_free_paid_distribution = df.groupby(['Category', 'Type']).size().unstack().fillna(0).to_dict()
    return jsonify(category_free_paid_distribution)

@app.route('/api/size_free_paid')
def size_free_paid():
    free_apps = df[df['Type'] == 'Free']
    paid_apps = df[df['Type'] == 'Paid']
    size_free_vs_paid = {'free': free_apps['Size'].mean(), 'paid': paid_apps['Size'].mean()}
    return jsonify(size_free_vs_paid)

if __name__ == '__main__':
    app.run(debug=True)
