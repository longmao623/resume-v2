from playwright.sync_api import sync_playwright
import os

desktop = os.path.join(os.path.expanduser('~'), 'Desktop')
os.makedirs(desktop, exist_ok=True)

with sync_playwright() as pw:
    browser = pw.chromium.launch()
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:9877/')
    page.wait_for_timeout(2500)

    # Hero
    page.screenshot(path=os.path.join(desktop, 'resume-v2-hero.png'), full_page=False)

    # About
    page.evaluate("document.getElementById('about').scrollIntoView()")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(desktop, 'resume-v2-about.png'), full_page=False)

    # Experience
    page.evaluate("document.getElementById('experience').scrollIntoView()")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(desktop, 'resume-v2-experience.png'), full_page=False)

    # Projects
    page.evaluate("document.getElementById('projects').scrollIntoView()")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(desktop, 'resume-v2-projects.png'), full_page=False)

    # Skills
    page.evaluate("document.getElementById('skills').scrollIntoView()")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(desktop, 'resume-v2-skills.png'), full_page=False)

    # Contact
    page.evaluate("document.getElementById('contact').scrollIntoView()")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(desktop, 'resume-v2-contact.png'), full_page=False)

    browser.close()

print('screenshots saved to Desktop')
