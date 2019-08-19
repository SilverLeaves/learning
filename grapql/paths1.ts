import res from "./login-simple"
import routers from "./routers"

let role = res.data[0]

let menus = role.permission.menu

let menuMap = new Map(menus.map((ele: string) => {
    return [ele, true]
}))

function getPaths(router: typeof routers, permision: typeof menuMap, list: string[] = []) {
    router.forEach((ele) => {

        if (permision.has(ele.path)) {
            list.push(ele.path)
        }
        if (ele.children && ele.children.length > 0) {
            getPaths(ele.children, permision, list)
        }
    })

    return list;
}

let paths = getPaths(routers, menuMap)

console.log(paths)
