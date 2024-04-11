const h = () => {
    if (s.length < 1 || !n.current || !t.current) {
        // Condition check: captcha token present, username and password fields are not empty
        l(!0); // Set loading state to true
        // Send login request
        b.sendWithCallback({
            ID: "button1", // ID for the request
            username: n.current.value, // Username value from username input field
            password: t.current.value, // Password value from password input field
            captchaToken: s // Captcha token
        }, g => {
            // Callback function: Handle response from the server
            switch (g.status) {
                case "INCORRECT_CAPTCHA":
                    d.error("Failed to verify captcha");
                    break;
                case "INVALID_CREDENTIALS":
                    d.error("Wrong username or password!");
                    break;
                case "OK":
                    r(null);
                    break;
            }
            // Reset captcha
            p();
            // Set loading state to false
            l(!1);
        });
    }
};
