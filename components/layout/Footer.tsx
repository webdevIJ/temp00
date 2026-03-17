import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import config from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <Zap className="w-6 h-6 text-blue-400" />
              <span>{config.businessName}</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">{config.footerTagline}</p>
            <div className="flex gap-3">
              {config.social.facebook && (
                <a href={config.social.facebook} aria-label="Facebook" className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {config.social.linkedin && (
                <a href={config.social.linkedin} aria-label="LinkedIn" className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {config.social.twitter && (
                <a href={config.social.twitter} aria-label="Twitter" className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {config.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/service-one" className="text-sm hover:text-blue-400 transition-colors">
                  Service One
                </Link>
              </li>
              <li>
                <Link href="/services/service-two" className="text-sm hover:text-blue-400 transition-colors">
                  Service Two
                </Link>
              </li>
              <li>
                <Link href="/services/service-three" className="text-sm hover:text-blue-400 transition-colors">
                  Service Three
                </Link>
              </li>
              <li>
                <Link href="/services/service-four" className="text-sm hover:text-blue-400 transition-colors">
                  Service Four
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <a href={config.phoneHref} className="hover:text-blue-400 transition-colors">{config.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <a href={`mailto:${config.email}`} className="hover:text-blue-400 transition-colors">{config.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <span>{config.address.city}, {config.address.state} {config.address.zip}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {config.businessName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
