function customReact (reactElement, container) {
    /*const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.append(domElement)
    */

    const domElement = document.createElement
        (reactElement.type).innerHTML = reactElement.children
    for(let prop in reactElement.props) {
        if (prop === 'children') continue;
        /* problrm with this line no. 16
        domElement.setAttribute(prop, reactElement.props[prop]) */
        console.log(reactElement.props.href);
        
    }
    container.append(domElement)
    
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    
    children: 'Click me to visit'
}
const root = document.getElementById('root');

customReact(reactElement, root)
root.render