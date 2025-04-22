import { Button } from "./button"
import { TwitterIcon, LinkedinIcon, GithubIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col space-y-10 md:flex-row md:justify-between md:items-start">
          
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Daily Buggle</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our platform empowers organizations to unlock deeper insights.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-2 md:items-start md:space-y-2 text-gray-600 dark:text-gray-400">
            <a href="/about" className="hover:text-gray-900 dark:hover:text-white">About Us</a>
            <a href="/services" className="hover:text-gray-900 dark:hover:text-white">Services</a>
            <a href="/contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
            <a href="/privacy" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <TwitterIcon size={24} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://github.com"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <GithubIcon size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; 2024 YourCompany. All rights reserved.
          </p>

          <Button variant="outline" className="dark:bg-gray-900 dark:text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
