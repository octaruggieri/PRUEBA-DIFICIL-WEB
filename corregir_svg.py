def generar_archivo_svg(texto, fondo, color_texto):
    svg_content = f'''
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="100%" height="100%" fill="{fondo}"/>
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="{color_texto}">{texto}</text>
    </svg>
    '''

    with open('rectangulo.svg', 'w') as file:
        file.write(svg_content)

# Ejemplo de uso
generar_archivo_svg('Hola Mundo', '#FF0000', '#FFFFFF')
