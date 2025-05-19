<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Louisa Gemstones</title>
    <link rel="stylesheet" href="assets/css/auth.css">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <script src="assets/js/login.js" defer></script>
</head>
<body>
    <img src="assets/photos/logogemstone.JPG" alt="Louisa Gemstones Logo" class="logo">

    <div class="wrapper">
        <form id="loginForm">
            <h1>Login</h1>

            <div class="input-box">
                <input type="email" id="email" placeholder="Email" required>
                <i class="bx bxs-envelope"></i>
            </div>

            <div class="input-box">
                <input type="password" id="password" placeholder="Password" required>
                <i class="bx bxs-lock-alt"></i>
            </div>

            <div class="remember-forgot">
                <label><input type="checkbox" id="rememberMe"> Remember me</label>
                <a href="forgotpassword.php">Forgot password?</a>
            </div>

            <button type="submit" class="btn">Login</button>

            <div class="linkstyle-login-back">
                <p>Don't have an account? <a href="register.php">Register</a></p>
            </div>
        </form>
    </div>
</body>
</html>
