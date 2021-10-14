from flask import Flask, request, jsonify
from bson.json_util import dumps
from bson.objectid import ObjectId
import db
from flask_cors import CORS
from datetime import datetime


app = Flask(__name__)
CORS(app)


@app.route("/pacientes/<documento>", methods=['GET'])
def get_paciente(documento):
    con = db.get_connection()
    dblis = con.lis
    try:
        pacientes = dblis.pacientes
        response = app.response_class(
            response=dumps(pacientes.find_one({'documento': documento})),
            status=200,
            mimetype='application/json'
        )
        return response
    finally:
        con.close()
        print("Connection closed")


@app.route("/pacientes/<documento>", methods=['DELETE'])
def borrar_paciente(documento):
    con = db.get_connection()
    dblis = con.lis
    try:
        paciente = dblis.pacientes
        paciente.delete_one({'documento': documento})
        return jsonify({"message": "Paciente borrado del sistema"})
    except:
        return jsonify({"error": "No se pudo borrar"})
    finally:
        con.close()
        print("Connection closed")


@app.route("/pacientes", methods=['GET'])
def get_pacientes():
    con = db.get_connection()
    dblis = con.lis
    try:
        pacientes = dblis.pacientes
        response = app.response_class(
            response=dumps(pacientes.find(
                {}, {"citas": 0, "fecha_nacimiento": 0})),
            status=200,
            mimetype='application/json'
        )
        return response
    finally:
        con.close()
        print("Connection closed")


@app.route("/pacienteresultado/<id>", methods=['GET'])
def get_paciente_resultado(id):
    con = db.get_connection()
    dblis = con.lis
    try:
        pacientes = dblis.pacientes
        response = app.response_class(
            response=dumps(pacientes.find_one({'_id': ObjectId(id)})),
            status=200,
            mimetype='application/json'
        )
        return response
    finally:
        con.close()
        print("Connection closed")


@app.route("/loginbac", methods=['POST'])
def login_bac():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    con = db.get_connection()
    dblis = con.lis
    try:
        bacteriologos = dblis.bacteriologos
        data = bacteriologos.find_one({'email': email, 'password': password})
        print(data)
        if data == None:
            return jsonify({"msg": "nodata"})

        return dumps(data)

    finally:
        con.close()
        print("Connection closed")


@app.route("/cita/<documento>", methods=['PUT'])
def cita(documento):
    colesterol_total = request.json.get("colesterol_total", None)
    trigliceridos = request.json.get("trigliceridos", None)
    hdl = request.json.get("hdl", None)
    ldl = request.json.get("ldl", None)
    fecha = request.json.get("fecha", None)
    if(colesterol_total == "" or trigliceridos == "" or hdl == "" or ldl == ""):
        return jsonify({"error": "no ingresó todos los campos, no se guarda cita!!!"})
    con = db.get_connection()
    dblis = con.lis
    try:
        pacientes = dblis.pacientes
        pacientes.find_one_and_update(
            {'documento': documento},
            {'$push': {'citas':
                       {
                           '_id_cita': ObjectId(),
                           'fecha': fecha,
                           'perfil_lipidico': {
                               'colesterol_total': colesterol_total,
                               'trigliceridos': trigliceridos,
                               'hdl': hdl,
                               'ldl': ldl,
                           }
                       }}})

        return jsonify({"message": "Cita guardada"})
    except:
        jsonify({"error": "algo sucedio!!!"})

    finally:
        con.close()
        print("Connection closed")


@app.route("/crearpaciente", methods=['POST'])
def create():
    data = request.get_json()

    con = db.get_connection()
    dblis = con.lis
    date = datetime.now()

    try:
        pacientes = dblis.pacientes
        pacientes.create_index("documento", unique=True)
        verificacion = pacientes.find_one({'documento': data["documento"]})
        if verificacion != None:
            return jsonify({"message": "ya existe paciente con ese documento"})
        pacientes.insert_one({
            "nombre": data["nombre"],
            "eps": data["eps"],
            "genero": data["genero"],
            "documento": data["documento"],
            "fecha_nacimiento": data["fecha_nacimiento"],
            "citas": [{
                '_id_cita': ObjectId(),
                "fecha": date.strftime('%d-%m-%Y'),
                "perfil_lipidico": {
                    "colesterol_total": data["colesterol_total"],
                    "trigliceridos":data["trigliceridos"],
                    "ldl":data["ldl"],
                    "hdl":data["hdl"],
                }
            }
            ]
        })
        return jsonify({"message": "Nuevo paciente guardado!"})
    except:
        return jsonify({"error": "puede que ya exista alguien con ese documento"})

    finally:
        con.close()
        print("Connection closed")
