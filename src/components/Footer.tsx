export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-white text-xl mb-4">
              AI Federated Intelligence Framework
            </h3>
            <p className="text-gray-400 mb-4">
              Building trustworthy AI for healthcare through open benchmarking,
              privacy-preserving validation, and collaborative innovation.
            </p>
            <p className="text-gray-400">CDIS, IIT Kanpur</p>
          </div>

          <div>
            <h4 className="text-white mb-4">Partners</h4>
            <ul className="space-y-2 text-gray-400">
              <li>National Health Authority</li>
              <li>IIT Kanpur</li>
              <li>ICMR</li>
              <li>Department of Health Research</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Platform
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 IIT Kanpur. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Data Usage Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
