from flask import Flask, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

app.secret_key = 'zKSjsdtSD'

# Database connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'cesar_kiosk'

mysql = MySQL(app)

# Import routes
from Johnapp import routes


