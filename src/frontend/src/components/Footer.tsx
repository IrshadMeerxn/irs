import { Heart } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: SiGithub, href: "https://github.com", label: "GitHub" },
    { icon: SiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: SiX, href: "https://x.com", label: "X (Twitter)" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Irshad
              </h3>
              <p className="text-sm text-muted-foreground">
                Full-Stack Developer passionate about creating beautiful and
                functional web experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-foreground transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("skills")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-foreground transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1 flex-wrap">
              © {currentYear} Irshad{" "}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 inline" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
