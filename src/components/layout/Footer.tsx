import Link from "next/link";
import { navigationConfig } from "~/config/navigation";
import { siteConfig } from "~/config/site";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Organization Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-lg font-semi-bold mb-4">{siteConfig.name}</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            {siteConfig.organization.mission}
                        </p>
                        <p className="text-gray-400 text-xs">
                            Founded {siteConfig.organization.founded} | {siteConfig.organization.registrationNumber}
                        </p>
                    </div>

                    {/* Navigation Links */}
                    {navigationConfig.footerNav.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-sm font-semibold mb-4 text-gray-200">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) =>(
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-white text-sm transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-4000 text-sm">
                        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {Object.entries(siteConfig.socials).map(([platform, url]) => (
                            <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors" 
                            >
                                <span className="sr-only">{platform}</span>
                                <div className="w-5 h-5 bg-gray-400 hover:bg-white rounded"></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}