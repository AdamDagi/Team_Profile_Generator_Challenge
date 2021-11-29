function generateCard(data) {
    return `
        <div class="name">
          ${data.name}
        </div>
        <div class="age">
          ${data.age}
        </div>
    `;
};

function generateHTML(data) {
    const card = generateCard(data);
    return `
        <!DOCTYPE HTML>
        <html>
            <head>
                <title>!DOCTYPE</title>
                <meta charset="utf-8">
                <link rel="stylesheet" href="../css/style.css">
            </head>
            <body>
                <p class="pishka">dvjdbfvbjhf</p>
                ${card}
            </body> 
        </html>
    `;
};

module.exports = generateHTML;