function generateCard(data) {
    let cardsHTML;
    data.forEach((card) => {
        const objectCard = card[0];
        const cardHTML = `
            <div class="cardConteiner">
                <div class="card">
                    <div class="cardHeader">${objectCard}</div>
                    <div class="cardLine">${objectCard}</div>
                    <div class="cardLine">${objectCard}</div>
                    <div class="cardLine">${objectCard}</div>
                    <div class="cardLine">${objectCard}</div>
                    <div class="cardLineLast">${objectCard}</div>
                </div>
            </div>
        `;
        cardsHTML = cardsHTML + cardHTML;
    });

    return cardsHTML;
};

function generateHTML(data) {
    const cards = generateCard(data);
    return `
        <!DOCTYPE HTML>
        <html>
        <head>
            <title>!DOCTYPE</title>
            <meta charset="utf-8">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Vast+Shadow&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../css/style.css">
        </head>
        
        <body>
            <header class="header">
                <div class="headerLogo"></div>
                <div class="headerLogoConteiner">
                    <h1 class="headerTitle">My Team</h1>
                </div>
            </header>
        
            <main class="main">
                ${cards}
            </main>
        </body> 
        </html>
    `;
};

module.exports = generateHTML;