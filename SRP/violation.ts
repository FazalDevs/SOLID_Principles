class UserRegistrationService {
  register(email: string, password: string): void {

    // 1. Validation
    if (!email.includes("@")) {
      throw new Error("Invalid email");
    }
    if (password.length < 8) {
      throw new Error("Password too short");
    }

    // 2. Hashing
    const hashedPassword = this.sha256(password);

    // 3. Persistence
    console.log("Saving user to database...");
    // db.insert({ email, hashedPassword });

    // 4. Email
    console.log(`Sending welcome email to ${email}`);
    // emailClient.send(...)

    // 5. Logging
    console.log(`User registered: ${email}`);
  }

  private sha256(value: string): string {
    return `hashed(${value})`;
  }
}
