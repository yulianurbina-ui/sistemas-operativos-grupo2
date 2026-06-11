from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT = 5000

class Handler(SimpleHTTPRequestHandler):
    pass

with HTTPServer(("", PORT), Handler) as httpd:
    print(f"Servidor corriendo en http://0.0.0.0:{PORT}")
    httpd.serve_forever()
