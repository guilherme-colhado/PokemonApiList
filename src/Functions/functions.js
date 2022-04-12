// eslint-disable-next-line import/no-anonymous-default-export
export default {
    captalize: name => name[0].toUpperCase() + name.slice(1),
    tresNuns: num => `${num}`.length === 3 ? num : !(`${num}`.length === 1) ? `0${num}`: `00${num}`
}