import React from 'react';
class Search extends React.Component{
    render(){
        let style1 = {
            position: 'relative',
            valign:'top'
        };
        return (
            <form className="searchBox">
                {/* <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;">
                    <input id="algolia-doc-search" type="search" placeholder="Search" aria-label="Search docs" className="inputBox" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-labelledby="algolia-doc-search" aria-owns="algolia-autocomplete-listbox-10" dir="auto" style="position: relative; vertical-align: top;"/>
                    <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 18px; font-style: normal; font-variant: normal; font-weight: 300; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;">
                    </pre> 
                </span> */}
                
                
                <input id="algolia-doc-search" type="search" placeholder="Search" aria-label="Search docs" class="inputBox" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-labelledby="algolia-doc-search" aria-owns="algolia-autocomplete-listbox-10" dir="auto"/>
                {/* <i class="fa">&#xf002;</i> */}
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        );
    }
}

export default Search;