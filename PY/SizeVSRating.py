import pandas as pd
import json

# 读取CSV文件，假设文件名为'your_file.csv'
df = pd.read_csv('F:/OT_Project/playStoreAnalysis/analysis_app/PY/googleplaystore.csv')


# 处理Size列：去掉"M"并尝试转换为浮点数，如果无法转换则跳过该行数据
def convert_size(size_str):
    try:
        return float(size_str.rstrip('M'))
    except ValueError:
        return None

df['Size'] = df['Size'].apply(convert_size)

# 选择需要的列：App、Size和Rating
selected_columns = ['App', 'Size', 'Rating']
df_selected = df[selected_columns]

# 删除包含NaN值的行（即无法转换为浮点数的Size值）
df_selected = df_selected.dropna()

# 将DataFrame转换为字典列表
data = df_selected.to_dict(orient='records')

# 将内容保存到JSON文件
json_file = 'output.json'
with open(json_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"数据已保存到 {json_file}")
