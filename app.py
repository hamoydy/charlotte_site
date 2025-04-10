import streamlit as st
import os

# Lire le contenu de ton fichier index.html
with open(os.path.join('chemin/vers/ton/fichier', 'index.html'), 'r') as f:
    html_content = f.read()

# Afficher le contenu HTML dans Streamlit
st.components.v1.html(html_content, height=600)
