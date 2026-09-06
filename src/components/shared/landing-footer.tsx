import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function LandingFooter() {
  return (
    <footer className="relative bg-muted/30 pt-24 overflow-hidden border-t border-border/50">
      {/* Brand Logo Watermark */}
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 dark:opacity-20 pointer-events-none select-none z-0 grayscale">
        <Image
          src="/images/solvevo-transparent.png"
          alt="SV"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Logo />
            <p className="text-muted-foreground max-w-sm mt-2 text-lg">
              We design and build premium web applications that ship fast and scale infinitely.
            </p>
            <div className="space-y-1">
              <p className="text-foreground font-medium">hello@solvevo.com</p>
              <p className="text-muted-foreground">@solvevo</p>
              <p className="text-muted-foreground mt-2">+1 555-019-2030</p>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-6 text-foreground">Company</h4>
              <ul className="space-y-4">
                <li><Link href="#work" className="text-muted-foreground hover:text-primary transition-colors">Work</Link></li>
                <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-6 text-foreground">Connect</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Solvevo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
