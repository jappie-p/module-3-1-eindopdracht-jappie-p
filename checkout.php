<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gemstone Webshop - Bestelling</title>
    <link rel="stylesheet" href="assets/css/form.css">
    <link rel="stylesheet" href="assets/css/formValidation.css">
</head>
<body>
    <div class="header">
        <img src="assets/photos/logogemstone.JPG" alt="Logo" class="logo">
    </div>
    
    <div class="container">
        <h1>JE GEGEVENS</h1>
        <p class="subtitle">Wat moet er op de factuur staan?</p>

        <form action="checkout_process.php">
            <div class="form-group">
                <div class="form-row">
                    <div class="label-column">
                        <h2>Type bestelling</h2>
                    </div>
                    <div class="input-column">
                        <div class="radio-group">
                            <label><input type="radio" name="type" value="particulier" checked> Particulier</label>
                            <label><input type="radio" name="type" value="zakelijk"> Zakelijk</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="form-row">
                    <div class="label-column">
                        <h2>Aanhef</h2>
                    </div>
                    <div class="input-column">
                        <div class="radio-group">
                            <label><input type="radio" name="aanhef" value="Dhr." checked> Dhr.</label>
                            <label><input type="radio" name="aanhef" value="Mevr."> Mevr.</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="form-row">
                    <div class="label-column">
                        <label>Naam</label>
                    </div>
                    <div class="input-column">
                        <div class="input-row">
                            <input type="text" name="voornaam" placeholder="Voornaam" required>
                            <input type="text" name="tussenvoegsel" placeholder="Tussenvoegsel" class="tussenvoegsel">
                            <input type="text" name="achternaam" placeholder="Achternaam" required>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="form-row">
                    <div class="label-column">
                        <label>Straatnaam</label>
                    </div>
                    <div class="input-column">
                        <input type="text" name="straatnaam" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="label-column">
                        <label>Huisnummer</label>
                    </div>
                    <div class="input-column">
                        <input type="text" name="huisnummer" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="label-column">
                        <label>Postcode</label>
                    </div>
                    <div class="input-column">
                        <input type="text" name="postcode" placeholder="1234AB" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="label-column">
                        <label>Land</label>
                    </div>
                    <div class="input-column">
                        <div class="radio-group">
                            <label><input type="radio" name="land" value="nederland" checked> Nederland</label>
                            <label><input type="radio" name="land" value="belgie"> In België laten bezorgen</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="form-row">
                    <div class="label-column">
                        <label>E-mailadres</label>
                    </div>
                    <div class="input-column">
                        <input type="email" name="email" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="label-column">
                        <label>Telefoonnummer</label>
                    </div>
                    <div class="input-column">
                        <input type="tel" name="telefoonnummer" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="label-column">
                        <label>Geboortedatum</label>
                    </div>
                    <div class="input-column" style="flex: 0.5;">
                        <input type="date" name="geboortedatum" required>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <h2>BEWAAR JE GEGEVENS</h2>
                <p class="subtitle">Handig voor de volgende keer.</p>
                <div class="form-row">
                    <div class="label-column">
                        <label>Wachtwoord</label>
                    </div>
                    <div class="input-column">
                        <input type="password" name="wachtwoord" placeholder="Minimaal 6 karakters">
                    </div>
                </div>
                <div class="form-row">
                    <div class="label-column">
                        <label>Wachtwoord bevestigen</label>
                    </div>
                    <div class="input-column">
                        <input type="password" name="wachtwoord_bevestigen">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="form-row">
                    <div class="label-column">
                        <label>Algemene Voorwaarden</label>
                    </div>
                    <div class="input-column">
                        <div class="checkbox-group">
                            <label>
                                <input type="checkbox" name="algemene_voorwaarden" required>
                                Ik ga akkoord met de <a href="#" class="terms-link">algemene voorwaarden</a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <button type="submit">Verder</button>
        </form>
    </div>

    <script src="assets/js/formValidation.js"></script>
</body>
</html>
