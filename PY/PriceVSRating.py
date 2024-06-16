import pandas as pd
import json

# 读取CSV文件，假设文件名为'your_file.csv'
df = pd.read_csv('F:/OT_Project/playStoreAnalysis/analysis_app/PY/googleplaystore.csv')

# 选择需要的列：App、Price和Rating
selected_columns = ['App', 'Price', 'Rating']
df_selected = df[selected_columns]

# 将内容保存到JSON文件
json_file = 'output.json'

# 将DataFrame转换为字典列表
data = df_selected.to_dict(orient='records')

# 将内容保存到JSON文件
with open(json_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"数据已保存到 {json_file}")

