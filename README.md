# Proyecto Final — Arquitecto Cloud
**Sistemas Operativos 750001C | Semestre 1 – 2026**
**Universidad del Valle**

---

## Equipo

| Nombre | Código | Rol |
|--------|--------|-----|
| Nicolas Barona Bonilla | 202553935 | Docker Engine |
| William Fernando ibargüen Rivas | 202453839 | Virtualización |
| Yulian Felipe Urbina Cantoñi| 202554016 | Sitio Web + Documentación |
| Estevan Felipe Gómez Ojeda | 202553964 | K8s Minikube |
| Alejandro Hernandez Sarria | 202553976 | Slides & Sustentación |


**Grupo asignado:** Grupo 2
**Distribución gráfica:** Ubuntu MATE 24.04 LTS
**Distribución consola:** Rocky Linux 9.4
**Imagen Docker base:** rockylinux:9

---

## Componente 1: Virtualización con Linux

**Distribuciones instaladas:** VM Gráfica + VM Consola  
**Herramienta:** VirtualBox / VMware

### Evidencias
- Captura instalación VM gráfica
- Captura particionamiento (lsblk)
- Captura configuración de red
- Captura prueba SSH funcional

### Comandos principales
```bash
ip a                          # Ver interfaces de red
lsblk                         # Ver particiones
ssh usuario@ip_vm_consola     # Conectar por SSH
```

---

## Componente 2: Contenedores Docker

**Servicios implementados:**
- Frontend: Nginx sirviendo HTML estático (puerto 80)
- Backend: Python HTTP (puerto 5000)

### Estructura de archivos
```
docker/
├── frontend/
│   ├── imagenes/
|   └── Dockerfile
│   └── index.html
├── backend/
│   ├── Dockerfile.backend
│   └── server.py
└── docker-compose.yml
```

### Evidencias
- Captura `docker compose up -d`
- Captura navegador accediendo al frontend
- Captura `curl http://localhost:5000`

### Comandos principales
```bash
docker compose up -d
docker ps
docker images
curl http://localhost
curl http://localhost:5000
```

---

## Componente 3: Orquestación con Kubernetes

**Herramienta:** Minikube

### Manifiestos
- `deployment.yaml` — Nginx con 2 réplicas
- `service.yaml` — NodePort en puerto 30080

### Evidencias
- Captura `kubectl get pods`
- Captura `kubectl get svc`
- Captura acceso desde navegador
- Captura escalado a 3 réplicas

### Comandos principales
```bash
minikube start
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods
kubectl scale deployment nginx --replicas=3
minikube service nginx --url
```

---

## Componente 4: Sitio Web de Documentación

**URL del sitio:** https://yulianurbina-ui.github.io/sistemas-operativos-grupo2/ 

**Video YouTube:** https://youtu.be/jRbws429uF0

### Secciones del sitio
- Home: introducción y objetivos
- Equipo: integrantes con fotos y roles
- Componentes: descripción, capturas y comandos de cada uno
- Conclusiones: aprendizajes, dificultades y recomendaciones

---

## Diagrama de Arquitectura

## Diagrama de Arquitectura

El siguiente esquema técnico detalla la infraestructura cloud implementada, la interconexión de entornos virtuales, el flujo de servicios contenedorizados y la capa de orquestación final para el Grupo 2:

```text
=============================================================================================
                                INFRAESTRUCTURA GENERAL (GRUPO 2)
=============================================================================================

 [ HOST FISCO ] (Windows ) --- Ejecuta VirtualBox/VMware
        |
        +=======> [ VM 1: LINUX GRÁFICO ] (Ubuntu MATE 24.04 LTS) 
        |                | (IP: Red Interna / Adaptador Puente)
        |                |
        |                +--- [ CLIENTE SSH ] ------------------------------+
        |                                                                   |
        +=======> [ VM 2: LINUX CONSOLA ] (Rocky Linux 9.4)                 | (Conexión Segura)
                         |                                                  | (Puerto 22)
                         +--- [ SERVIDOR SSH ] <============================+
                         |
                         +--- [ PARTICIONAMIENTO MANUAL ] (/, swap, /home)

=============================================================================================
                         COMPONENTE 2: ENTORNOS EN CONTENEDORES (DOCKER)
=============================================================================================

 [ UBUNTU MATE 24.04 ] (Entorno de Ejecución)
        |
   [ DOCKER ENGINE ] (Sin Desktop)
        |
        +---> [ DOCKER COMPOSE ] (Orquestación Local via docker-compose.yml)
                     |
                     +===> [ CONTENEDOR: FRONTEND ] (nginx:alpine)
                     |            |--- Puerto Externo: 8080
                     |            |--- Volumen Persistente: ./frontend -> /usr/share/nginx/html
                     |
                     +===> [ CONTENEDOR: BACKEND ] (Base: rockylinux:9)
                                  |--- Puerto Externo: 5000
                                  |--- Runtime: Python 3 (server.py)

=============================================================================================
                        COMPONENTE 3: ORQUESTACIÓN CON KUBERNETES
=============================================================================================

 [ UBUNTU MATE 24.04 ] (Entorno de Ejecución)
        |
   [ MINIKUBE CLUSTER ] (Single-Node)
        |
        +---> [ MANIFIESTO: deployment.yaml ] 
        |            |
        |            +---> [ REPLICAS: 3 PODS ] (Nginx Oficial / Escalado Manual)
        |                     [ Pod 1 ]   [ Pod 2 ]   [ Pod 3 ]
        |
        +---> [ MANIFIESTO: service.yaml ]
                     |
                     +---> [ SERVICIO: NODEPORT ] (Acceso Externo del Sistema)

---
## Componente 5: Conclusiones

1. [Aprendizaje principal]
2. [Dificultad encontrada y cómo se resolvió]
3. [Recomendación para futuros proyectos]

---

*Proyecto desarrollado para la asignatura Sistemas Operativos 750001C — Semestre 1, 2026*
