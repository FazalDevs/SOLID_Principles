class UserValidator {
  validate(email: string, password: string): void {
    if (!email.includes("@")) {
      throw new Error("Invalid email");
    }
    if (password.length < 8) {
      throw new Error("Password too short");
    }
  }
}

class PasswordHasher {
  hash(password: string): string {
    return `hashed(${password})`;
  }
}

class UserRepository {
  save(email: string, hashedPassword: string): void {
    console.log("Saving user to database:", { email, hashedPassword });
  }
}

class NotificationService {
  sendWelcome(email: string): void {
    console.log(`Sending welcome email to ${email}`);
  }
}

class AuditLogger {
  logRegistration(email: string): void {
    console.log(`User registered: ${email}`);
  }
}

class UserRegistrationService {
  constructor(
    private validator: UserValidator,
    private hasher: PasswordHasher,
    private repository: UserRepository,
    private notifier: NotificationService,
    private logger: AuditLogger
  ) { }

  register(email: string, password: string): void {
    this.validator.validate(email, password);

    const hashedPassword = this.hasher.hash(password);

    this.repository.save(email, hashedPassword);

    this.notifier.sendWelcome(email);

    this.logger.logRegistration(email);
  }
}

//usage
const service = new UserRegistrationService(
  new UserValidator(),
  new PasswordHasher(),
  new UserRepository(),
  new NotificationService(),
  new AuditLogger()
);

service.register("user@example.com", "strongpassword");
