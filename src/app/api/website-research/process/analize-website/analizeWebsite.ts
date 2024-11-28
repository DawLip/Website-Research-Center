import puppeteer from "puppeteer";
import { NextRequest, NextResponse } from "next/server"


type searchType = 'service website' | 'searcher' 

const analizeWebsite = (url:URL, searchType:searchType) => {
    switch(searchType){
        case 'service website':{
            return analizeServiceWebsite(url)
        }
        default:{
            console.error("searchType not supported");   
        }
    }
}

const analizeServiceWebsite =async (url:URL)=>{
    const browser = await puppeteer.launch()

    const page = await browser.newPage();
    
    await page.goto(url.href, {
    waitUntil: "domcontentloaded",
    })
    console.log( await page.$eval('div', node => node.tagName))

    browser.close()
    
}

export default analizeWebsite