import axios from 'axios'
// import { uuid } from "@/utils/tools"
import { f7 } from 'framework7-vue';

/**
 * 发起请求
 * @param {String} code 接口号
 * @param {Object} data 上送数据
 * @param {Object} options 请求配置
 */
export const rpc = (code, data = {}, options = {}) => {
    // H5
    showLoading();
    if (App.ismock) {
        const axiosConfig = {
            method: "GET",
            url: `${location.origin}/mock/${code}.app`
        }
        return new Promise((resolve, reject) => {
            axios(axiosConfig).then((res) => {
                hideLoading();
                resolve(res.data)
            }).catch((err) => {
                console.log('接口异常：' + err)
                hideLoading();
                reject(err)
            });
        })
    }
    const method = (options.method !== 'GET') ? 'POST' : 'GET';
    const axiosConfig = {
        method: method,
        url: `${window.App.rpc_link}/${code}.app`
    }
    if (method === 'POST') {
        axiosConfig.headers = {
            // 'Accept': 'text/xml',
            // 'Content-Type': 'text/xml;charset=UTF-8',
            // 'Access-Control-Allow-Origin': '*'
        };
        axiosConfig.data = JSON.stringify(data);
    }
    console.warn(axiosConfig)
    return new Promise((resolve, reject) => {
        axios(axiosConfig).then((res) => {
            hideLoading();
            resolve(res.data)
        }).catch((err) => {
            console.log('接口异常：' + err)
            hideLoading();
            reject(err)
        });
    })
};


/**
 * 打开页面
 * @param {String} name 页面名称
 * @param {Object} params 页面传参
 * @param {Object} options 页面配置
 */
export const pushWindow = (router, name, params = {}, options = {}) => {
    router.navigate({
        name: name,
        query: params,
        // transition: 'f7-cover', // f7-circle | f7-cover | f7-cover-v | f7-dive | f7-fade | f7-flip | f7-parallax | f7-push
    });
};


/**
 * 关闭页面
 * @param {String} url 键
 */
export const popWindow = (url = {}) => {
    router.back();
};


/**
 * 设置数据缓存
 * @param {String} key 键
 * @param {Object} value 值
 */
export const setSessionStorage = (key, value) => {
    sessionStorage.setItem(key, value)
};


/**
 * 获取数据缓存
 * @param {String} key 键
 */
export const getSessionStorage = (key) => {
    return sessionStorage.getItem(key)
};


/**
 * 删除数据缓存
 * @param {String} key 键
 */
export const deleteSessionStorage = (key) => {
    return sessionStorage.removeItem(key)
};


/**
 * 设置本地数据缓存
 * @param {String} key 键
 * @param {Object} value 值
 */
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
};


/**
 * 获取本地数据缓存
 * @param {String} key 键
 */
export const getLocalStorage = (key) => {
    return localStorage.getItem(key)
};


/**
 * 删除本地数据缓存
 * @param {String} key 键
 */
export const deleteLocalStorage = (key) => {
    localStorage.removeItem(key)
};


/**
 * 显示加载
 */
export const showLoading = () => {
    f7.preloader.show();
};


/**
 * 隐藏加载
 */
export const hideLoading = () => {
    f7.preloader.hide();
};


/**
 * 提示框
 * @param {String} title 标题
 * @param {String} message 提示内容
 * @param {String} type 提示类型
 */
export const alert = (message, title = '提示', type = 0) => {
    f7.dialog.alert(message, title);
};


/**
 * 弱提示
 * @param {String} message 提示内容
 * @param {String} icon 提示类型
 * @param {Integer} time 提示持续时间
 */
export const toast = (message, icon = '', time = 2000) => {
    let toastCenter;
    if (!toastCenter) {
        toastCenter = f7.toast.create({
            text: message,
            position: 'center',
            closeTimeout: time,
        });
    }
    toastCenter.open()
};