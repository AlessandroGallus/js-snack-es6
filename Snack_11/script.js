let browser = {
  tab: ['Facebook', 'GitHub', 'Gmail', 'Instagram', 'Linkedin', 'Twitter'],
  activeTab: 0
}

let social = ['Facebook', 'Instagram', 'Twitter']

browser.tab.forEach(element => {
  for(i=0;i<social.length;i++){
    if (element == social[i]) element.slice();
  }
});
console.log(browser)

