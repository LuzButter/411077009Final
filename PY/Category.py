import pandas as pd
import json

# 读取CSV文件
df = pd.read_csv('F:/OT_Project/playStoreAnalysis/analysis_app/PY/googleplaystore.csv')

# 计算每个Category中不重复文字的数量
category_counts = df['Category'].value_counts().reset_index()
category_counts.columns = ['type', 'value']

# 将结果转换为所需的格式
data = []
for index, row in category_counts.iterrows():
    data.append({
        'type': row['type'],
        'value': row['value']
    })

# 将结果保存为JSON文件
with open('F:\OT_Project\playStoreAnalysis\analysis_app\src\component\Data', 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print("文件已保存为 output.json")
