"""Offline guards for public README positioning; review canonical main for changes."""
from pathlib import Path
import re
import unittest

README = (Path(__file__).resolve().parents[1] / "README.md").read_text()


class MessagingTests(unittest.TestCase):
    def test_canonical_source_remains_linked(self):
        self.assertIn("https://github.com/seamless-connect/.github/blob/main/PROJECT-DESCRIPTION.md", README)

    def test_provider_coordination_and_initial_focus(self):
        text = re.sub(r"\s+", " ", README)
        self.assertRegex(text, r"neutral coordination layer between service providers, DNS providers, and registrars")
        self.assertRegex(text, r"initially focused on DNS configuration through Domain Connect")
        self.assertIn("nonprofit infrastructure project", text)

    def test_interfaces_do_not_replace_project_identity(self):
        self.assertNotRegex(README.lower(), r"(?:is an?|primary interface is)[^\n.]*developer cli")
        self.assertNotRegex(README.lower(), r"cli is the primary")
        self.assertIn("Interfaces (including APIs, CLIs, and authorized software agents) support the coordination service.", README)


if __name__ == "__main__":
    unittest.main()
