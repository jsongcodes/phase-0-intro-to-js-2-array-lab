const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

const destructivelyRemoveFirstCat = () => cats.shift()

function appendCat(name) {
    const copyOfCats = [...cats, name];
    return copyOfCats
}

const prependCat = (name) => {
    const copyOfCats = [name, ...cats]
    return copyOfCats
}

const removeLastCat = () => {
    return cats.slice(0, cats.length - 1)
}

const removeFirstCat = () => cats.slice(1)