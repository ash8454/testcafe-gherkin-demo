import { t } from 'testcafe';

import { Selector  } from 'testcafe';

// const Selector = (input, t) => {
//   return NativeSelector(input).with({ boundTestRun: t });
// };

// Selectors

// function select(selector) {
//     return Selector(selector).with({ boundTestRun: testController });
// }

// const Selector = (selector, t) => {
//     //return NativeSelector(selector).with({ boundTestRun: t });
//     return NativeSelector(selector).with({boundTestRun: t});
//   };
  

//Locator properties
const searchTextBox = '.header-search-input';


//navigate to
export async function goTo(url) {
    await t.navigateTo(url);
};


export async function searchText(text) {
    // const searchTextbox1 = await Selector(searchTextBox);
    // await t.expect(searchTextbox1).ok();
    const input = Selector('.header-search-input');
    await t.expect(input).ok();
    console.log("Text is: ", text)
    await t.typeText(input, text);
    //await t.typeText(searchTextbox1, text)
}

//press key
export async function pressKey(text){
    await t.pressKey(text)
}

//click login button
export async function validateSearchResults(text){
    const searchResultLocator = Selector('.repo-list-item').nth(0).innerText;
    await t.expect(searchResultLocator).contains(text);
}

