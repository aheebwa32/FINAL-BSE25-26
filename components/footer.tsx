import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Beesight</h3>
            <p className="text-sm text-muted-foreground">
              Beesight is a final year project that leverages foraging methods to improve bee hive productivity,
              combining advanced technology with ecological conservation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/documents" className="text-muted-foreground hover:text-primary transition-colors">
                  Documents
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:beesight@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  beesight@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary" />
                <a
                  href="https://github.com/beesight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <a
                  href="https://linkedin.com/company/beesight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Beesight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
