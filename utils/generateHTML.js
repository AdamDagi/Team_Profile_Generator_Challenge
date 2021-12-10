function generateCard(data) {
    let emogi;
    let classCard;
    let lastvalue;
    let cardsHTML = "";
    console.log(data)
    data.forEach((card) => {
        if (card.type == "Manager") {
            emogi = String.fromCodePoint(0x1F451);
            classCard = "managerCard";
            lastvalue = `Office Number: ${card.officeNumber}`;
        }
        if (card.type == "Engineer") {
            emogi = String.fromCodePoint(0x1F472);
            classCard = "engineerCard";
            lastvalue = `GitHub: <a href="https://github.com/${card.github}" class="fa fa-github" title="GitHub">${card.github}</a>`;
        }
        if (card.type == "Intern") {
            emogi = String.fromCodePoint(0x1F393);
            classCard = "internCard";
            lastvalue = `School: ${card.school}`;
        }
        
        const cardHTML = `
                <div class="card ${classCard}">
                    <table id="customers">
                        <tr>
                            <th>${card.name}</th>
                        </tr>
                        <tr>
                            <td>${emogi} ${card.type}</td>
                        </tr>
                        <tr>
                            <td>ID: ${card.id}</td>
                        </tr>
                        <tr>
                            <td>Email: <a href="mailto:${card.email}" class="fa fa-google" title="Gmail">${card.email}</a></td>
                        </tr>
                        <tr class="lastLine">
                            <td>${lastvalue}</td>
                        </tr>
                    </table>
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
                <div class="cardConteiner">
                ${cards}
                </div>
            </main>
        </body> 
        </html>
    `;
};

module.exports = generateHTML;