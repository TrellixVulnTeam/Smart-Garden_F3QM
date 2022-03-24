import paho.mqtt.client as mqtt
import sqlite3
import os

DATABASE_FILE = r'D:\backend_control_device\control_device\db.sqlite3'

# if os.path.isfile(DATABASE_FILE):
#     print('adad')
con = sqlite3.connect(DATABASE_FILE)
cur = con.cursor()

print(cur.execute("insert into polls_inforsensor ( nhiet_do, do_am, anh_sang) values( ? , ?, ? )", (21, 22, 23)))

con.commit()
print("Records created successfully")
con.close()