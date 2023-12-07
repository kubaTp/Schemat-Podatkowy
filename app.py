from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    questions = [{'question': 'Czy jest schemat transgraniczny?'}]
        
    return render_template("index.html", questions = questions);

if __name__ == "__main__":
    app.run(port = 5000, debug = True)