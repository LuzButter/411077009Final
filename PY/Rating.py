import pandas as pd
import json

# 读取CSV文件，假设文件名为'your_file.csv'
df = pd.read_csv('F:/OT_Project/playStoreAnalysis/analysis_app/PY/googleplaystore.csv')

# 计算Rating列中每个不重复文字的数量
rating_counts = df['Rating'].value_counts().reset_index()
rating_counts.columns = ['action', 'pv']  # 使用 'action' 和 'pv' 作为列名

# 准备保存为JSON文件的内容
data = []
for index, row in rating_counts.iterrows():
    data.append({
        'action': str(row['action']),  # 确保转换为字符串
        'pv': int(row['pv'])  # 确保转换为整数
    })

# 将内容保存到JSON文件
json_file = 'output.json'
with open(json_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print(f"数据已保存到 {json_file}")
