import React, { useState } from "react";
import "./Header.css";
import {
  IoSettingsOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoGlobeOutline,
  IoClose,
  IoSunnyOutline,
  IoMoonOutline,
  IoHomeSharp,
  IoInformationCircle,
} from "react-icons/io5";
import { IoMdRadio } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";

import { FaMicrophone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Drakmode, Lightmode } from "../Store_Rtk/Slices/ColorTheme";
import { Link } from "react-router-dom";

const HeaderPage = () => {

  const dark_mode = useSelector((state) => state.darkMode.value);

  const dispatch = useDispatch();

  const [focus_input, setFocus_input] = useState(false);

  const [open_Sidebar_Search, set_Open_Sidebar_Search] = useState(false);

  const [open_Sidebar_Setting, set_Open_Sidebar_Setting] = useState(false);

  const [open_Sidebar_Language, set_Open_Sidebar_Language] = useState(false);

  const [open_logo_images_setting, set_Open_logo_images_setting] = useState(false);


  const clear_Input_search = (e) => {
    e.preventDefault();
    document.querySelector(".input_search").value = "";
    setFocus_input(false)
  };

  window.onclick = (e) => {
    if (
      !document.querySelector(".sidebar_search ").contains(e.target) &&
      !document.querySelector(".search_icon").contains(e.target)
    ) {
      set_Open_Sidebar_Search(false);
    }
    if (
      !document.querySelector(".sidebar_Setting ").contains(e.target) &&
      !document.querySelector(".setting_icon ").contains(e.target)
    ) {
      set_Open_Sidebar_Setting(false);
    }
    if (
      !document.querySelector(".sidebar_language").contains(e.target) &&
      !document.querySelector(".language_icon").contains(e.target)
    ) {
      set_Open_Sidebar_Language(false);
    }
    if (
      !document.querySelector(".logo-images_setting").contains(e.target) &&
      !document.querySelector(".logo-images").contains(e.target)
    ) {
      set_Open_logo_images_setting(false);
    }
  };

  return (

    <header className={`headerTop w-full relative flex justify-center items-center border-b ${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-light_main_bg_color border-[#ddd]`}`}>

      <div className={`container w-full flex justify-center items-center`}>

        <div className={`w-full flex justify-between items-center py-3 gap-2 `}>

          <div className="logo_images-parent flex justify-center items-center ">

            <div className="logo-images flex items-center gap-3">

              <button
                className={`logo_icon-menu duration-300 p-2 rounded-lg cursor-pointer 
                  ${dark_mode
                    ? `hover:bg-icon_hover_color text-light_main_bg_color`
                    : `hover:bg-main_hover_color hover:text-light_main_txt_color`
                  }`}
                onClick={() => set_Open_logo_images_setting(!open_logo_images_setting)}
              >

                <TfiMenuAlt className={`icon text-2xl`} />
              </button>

              <Link to={`/`} className="logo-image hidden sm:flex">

                <svg
                  width="118"
                  height="21"
                  viewBox="0 0 118 21"
                  fill={`${dark_mode ? `#fff` : `#000`}`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.468 15.318c-.073.968-.25 1.797-.528 2.486-.264.69-.623 1.21-1.078 1.562-.323.25-.733.44-1.232.572-.484.132-.99.198-1.518.198-.895 0-1.767-.14-2.618-.418-.85-.279-1.929-.711-3.234-1.298l-1.452-.616c-.279-.103-.455-.154-.528-.154a4.947 4.947 0 0 1-.946.396 2.985 2.985 0 0 1-.902.154c-.308 0-.557-.059-.748-.176a.513.513 0 0 1-.286-.484c0-.22.103-.389.308-.506.205-.117.506-.176.902-.176.513 0 1.07.132 1.672.396a10.118 10.118 0 0 0 1.65-.594c.132-.044.279-.103.44-.176.176-.073.374-.147.594-.22-1.452-.147-2.72-.55-3.806-1.21a6.71 6.71 0 0 1-2.486-2.706c-.587-1.144-.88-2.479-.88-4.004 0-1.613.352-3.043 1.056-4.29A7.39 7.39 0 0 1 4.796 1.15C6.057.46 7.495.116 9.108.116c1.657 0 3.11.315 4.356.946a6.826 6.826 0 0 1 2.904 2.75c.69 1.188 1.034 2.61 1.034 4.268 0 1.584-.337 2.992-1.012 4.224a7.401 7.401 0 0 1-2.838 2.904c-1.217.69-2.61 1.056-4.18 1.1a5.68 5.68 0 0 0-.99.22c-.308.103-.601.213-.88.33-.587.235-1.07.403-1.452.506l.858.022c1.261.044 2.332.066 3.212.066 1.525 0 2.772-.103 3.74-.308.821-.176 1.467-.403 1.936-.682.47-.279.887-.697 1.254-1.254l.418.11ZM5.412 8.256c0 1.525.169 2.867.506 4.026.337 1.159.792 2.053 1.364 2.684.572.63 1.203.946 1.892.946.719 0 1.35-.323 1.892-.968.557-.66.983-1.577 1.276-2.75.293-1.173.44-2.515.44-4.026 0-1.525-.169-2.867-.506-4.026-.337-1.159-.792-2.053-1.364-2.684C10.34.828 9.709.512 9.02.512c-.719 0-1.357.33-1.914.99-.543.645-.96 1.555-1.254 2.728-.293 1.173-.44 2.515-.44 4.026Zm24.841 5.346c0 .675.088 1.166.264 1.474.19.308.514.462.968.462V16c-.454-.044-.91-.066-1.364-.066-1.525 0-2.801.103-3.828.308v-1.584c-.66 1.1-1.826 1.65-3.498 1.65-1.173 0-2.002-.293-2.486-.88-.22-.264-.381-.616-.484-1.056-.102-.455-.154-1.049-.154-1.782V6.98c0-.675-.095-1.166-.286-1.474-.176-.308-.491-.462-.946-.462v-.462c.455.044.91.066 1.364.066 1.526 0 2.802-.103 3.828-.308v9.438c0 .47.08.821.242 1.056.176.22.455.33.836.33a1.54 1.54 0 0 0 1.1-.44c.323-.308.484-.69.484-1.144v-6.6c0-.675-.095-1.166-.286-1.474-.176-.308-.491-.462-.946-.462v-.462c.455.044.91.066 1.364.066 1.526 0 2.802-.103 3.828-.308v9.262Zm10.122-9.328c.718 0 1.232.22 1.54.66.322.44.484.96.484 1.562 0 .66-.19 1.188-.572 1.584-.367.381-.85.572-1.452.572-.63 0-1.115-.14-1.452-.418-.337-.293-.506-.682-.506-1.166 0-.865.374-1.547 1.122-2.046-.264 0-.499.051-.704.154a2.167 2.167 0 0 0-.924.792c-.25.352-.374.74-.374 1.166v6.6c0 .69.14 1.166.418 1.43.293.25.785.374 1.474.374V16c-.19 0-.352-.007-.484-.022-1.54-.044-2.567-.066-3.08-.066-.455 0-1.474.022-3.058.066a3.873 3.873 0 0 1-.462.022v-.462c.455 0 .77-.11.946-.33.19-.235.286-.653.286-1.254V6.98c0-.675-.096-1.166-.286-1.474-.176-.308-.491-.462-.946-.462v-.462c.47.044.924.066 1.364.066 1.525 0 2.801-.103 3.828-.308v1.584c.557-1.1 1.503-1.65 2.838-1.65Zm5.422 11.88c-.94 0-1.65-.25-2.134-.748-.47-.513-.704-1.151-.704-1.914 0-.66.168-1.203.506-1.628.352-.44.762-.777 1.232-1.012.469-.235 1.078-.477 1.826-.726.792-.264 1.37-.506 1.738-.726.366-.22.55-.528.55-.924V6.518c0-.47-.118-.887-.352-1.254-.235-.367-.638-.55-1.21-.55-.455 0-.866.125-1.232.374.498.176.865.44 1.1.792.249.337.374.719.374 1.144 0 .572-.206 1.034-.616 1.386-.396.337-.88.506-1.452.506s-1.027-.176-1.364-.528c-.323-.367-.484-.829-.484-1.386 0-.44.11-.821.33-1.144.22-.323.564-.616 1.034-.88.82-.47 1.994-.704 3.52-.704.806 0 1.503.08 2.09.242a3.072 3.072 0 0 1 1.496.858c.293.308.484.697.572 1.166.102.455.154 1.093.154 1.914v5.896c0 .367.022.616.066.748.058.132.154.198.286.198.102 0 .212-.03.33-.088.117-.073.227-.154.33-.242l.22.374c-.631.543-1.533.814-2.706.814-.88 0-1.496-.147-1.848-.44-.352-.308-.543-.719-.572-1.232-.69 1.115-1.716 1.672-3.08 1.672Zm2.2-1.76c.308 0 .579-.125.814-.374V9.378c-.132.22-.374.506-.726.858-.396.381-.697.755-.902 1.122-.206.352-.308.836-.308 1.452 0 1.056.374 1.584 1.122 1.584Zm15.317-10.12c1.173 0 2.002.293 2.486.88.22.264.381.623.484 1.078.103.44.154 1.027.154 1.76v5.962c0 .601.088 1.02.264 1.254.19.22.513.33.968.33V16c-1.584-.059-2.61-.088-3.08-.088-.499 0-1.54.03-3.124.088v-.462c.381 0 .645-.11.792-.33.147-.235.22-.653.22-1.254v-7.15c0-.47-.088-.814-.264-1.034-.161-.235-.433-.352-.814-.352-.425 0-.8.154-1.122.462-.308.293-.462.667-.462 1.122v6.952c0 .601.073 1.02.22 1.254.147.22.41.33.792.33V16a92.29 92.29 0 0 0-2.904-.088c-.499 0-1.599.03-3.3.088v-.462c.455 0 .77-.11.946-.33.19-.235.286-.653.286-1.254V6.98c0-.675-.095-1.166-.286-1.474-.176-.308-.491-.462-.946-.462v-.462c.47.044.924.066 1.364.066 1.525 0 2.801-.103 3.828-.308v1.584c.66-1.1 1.826-1.65 3.498-1.65Zm7.7 8.25c.704 0 1.24.161 1.606.484.381.323.572.792.572 1.408 0 .616-.19 1.085-.572 1.408-.367.323-.902.484-1.606.484-.704 0-1.247-.161-1.628-.484-.367-.323-.55-.792-.55-1.408 0-.616.183-1.085.55-1.408.381-.323.924-.484 1.628-.484Zm9.421-8.25c.601 0 1.151.066 1.65.198.513.117.931.271 1.254.462.41.235.733.55.968.946.235.396.352.843.352 1.342 0 .616-.198 1.13-.594 1.54-.396.396-.902.594-1.518.594-.63 0-1.13-.176-1.496-.528-.352-.367-.528-.85-.528-1.452 0-.528.169-.99.506-1.386.352-.41.785-.682 1.298-.814-.22-.176-.513-.264-.88-.264-.939 0-1.599.506-1.98 1.518-.381.997-.572 2.185-.572 3.564 0 1.408.264 2.413.792 3.014s1.18.902 1.958.902c1.07 0 1.958-.491 2.662-1.474l.374.132a6.073 6.073 0 0 1-1.65 2.64c-.763.733-1.745 1.1-2.948 1.1-1.599 0-2.882-.477-3.85-1.43s-1.452-2.479-1.452-4.576c0-2.01.513-3.513 1.54-4.51 1.041-1.012 2.413-1.518 4.114-1.518Zm11.087 0c1.803 0 3.197.477 4.18 1.43.982.939 1.474 2.471 1.474 4.598s-.492 3.66-1.475 4.598c-.982.939-2.375 1.408-4.18 1.408-1.803 0-3.197-.47-4.18-1.408-.982-.939-1.473-2.471-1.473-4.598s.49-3.66 1.474-4.598c.982-.953 2.376-1.43 4.18-1.43Zm0 .44c-.47 0-.844.462-1.123 1.386-.278.924-.418 2.325-.418 4.202 0 1.877.14 3.278.419 4.202.278.91.652 1.364 1.121 1.364.47 0 .844-.455 1.123-1.364.278-.924.417-2.325.417-4.202 0-1.877-.139-3.278-.418-4.202-.278-.924-.652-1.386-1.121-1.386Zm25.017 9.24c0 .601.088 1.02.264 1.254.191.22.514.33.968.33V16c-1.584-.059-2.61-.088-3.08-.088-.469 0-1.437.03-2.904.088v-.462c.294 0 .499-.11.616-.33.118-.22.176-.638.176-1.254v-7.15c0-.47-.088-.814-.264-1.034-.161-.235-.432-.352-.814-.352-.381 0-.733.161-1.056.484a2.132 2.132 0 0 0-.572 1.144c.03.352.044.667.044.946v5.962c0 .616.074 1.034.22 1.254.147.22.411.33.792.33V16a93.347 93.347 0 0 0-2.86-.088c-.469 0-1.437.03-2.904.088v-.462c.294 0 .499-.11.616-.33.118-.235.176-.653.176-1.254v-7.15c0-.47-.066-.814-.198-1.034-.132-.235-.352-.352-.66-.352-.425 0-.799.154-1.122.462-.308.293-.462.667-.462 1.122v6.952c0 .616.059 1.034.176 1.254.118.22.323.33.616.33V16a77.858 77.858 0 0 0-2.684-.088c-.498 0-1.598.03-3.3.088v-.462c.455 0 .77-.11.946-.33.191-.235.286-.653.286-1.254V6.98c0-.675-.095-1.166-.286-1.474-.176-.308-.491-.462-.946-.462v-.462c.47.044.924.066 1.364.066 1.526 0 2.802-.103 3.828-.308v1.584c.616-1.1 1.709-1.65 3.278-1.65 1.174 0 2.002.293 2.486.88.22.264.382.609.484 1.034.367-.704.851-1.195 1.452-1.474.616-.293 1.35-.44 2.2-.44 1.174 0 2.002.293 2.486.88.22.264.382.623.484 1.078.103.44.154 1.027.154 1.76v5.962Z"></path>
                </svg>

              </Link>

            </div>


            <div className={`logo-images_setting z-10 flex flex-wrap content-start gap-[50px] w-full sm:w-[350px] fixed right-0 top-0 h-screen border 
                  ${open_logo_images_setting
                ? `transition ease-in-out delay-150 duration-700 translate-x-0 flex`
                : `transition ease-in-out delay-150 duration-700 translate-x-[-640px] hidden`
              } 
                 ${dark_mode
                ? `bg-dark_main_bg_color border-[#666666]`
                : `bg-light_main_bg_color border-[#DDD]`
              }`}
            >

              <div className="logo-images_setting_logo flex items-center justify-between h-fit w-full border-b p-3">

                <div className="logo-image">
                  <Link to={`/`}>
                    <button
                      className={`w-full flex items-center gap-5`}
                      onClick={() => set_Open_logo_images_setting(false)}
                    >
                      <svg
                        width="118"
                        height="21"
                        viewBox="0 0 118 21"
                        fill={`${dark_mode ? `#fff` : `#000`}`}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.468 15.318c-.073.968-.25 1.797-.528 2.486-.264.69-.623 1.21-1.078 1.562-.323.25-.733.44-1.232.572-.484.132-.99.198-1.518.198-.895 0-1.767-.14-2.618-.418-.85-.279-1.929-.711-3.234-1.298l-1.452-.616c-.279-.103-.455-.154-.528-.154a4.947 4.947 0 0 1-.946.396 2.985 2.985 0 0 1-.902.154c-.308 0-.557-.059-.748-.176a.513.513 0 0 1-.286-.484c0-.22.103-.389.308-.506.205-.117.506-.176.902-.176.513 0 1.07.132 1.672.396a10.118 10.118 0 0 0 1.65-.594c.132-.044.279-.103.44-.176.176-.073.374-.147.594-.22-1.452-.147-2.72-.55-3.806-1.21a6.71 6.71 0 0 1-2.486-2.706c-.587-1.144-.88-2.479-.88-4.004 0-1.613.352-3.043 1.056-4.29A7.39 7.39 0 0 1 4.796 1.15C6.057.46 7.495.116 9.108.116c1.657 0 3.11.315 4.356.946a6.826 6.826 0 0 1 2.904 2.75c.69 1.188 1.034 2.61 1.034 4.268 0 1.584-.337 2.992-1.012 4.224a7.401 7.401 0 0 1-2.838 2.904c-1.217.69-2.61 1.056-4.18 1.1a5.68 5.68 0 0 0-.99.22c-.308.103-.601.213-.88.33-.587.235-1.07.403-1.452.506l.858.022c1.261.044 2.332.066 3.212.066 1.525 0 2.772-.103 3.74-.308.821-.176 1.467-.403 1.936-.682.47-.279.887-.697 1.254-1.254l.418.11ZM5.412 8.256c0 1.525.169 2.867.506 4.026.337 1.159.792 2.053 1.364 2.684.572.63 1.203.946 1.892.946.719 0 1.35-.323 1.892-.968.557-.66.983-1.577 1.276-2.75.293-1.173.44-2.515.44-4.026 0-1.525-.169-2.867-.506-4.026-.337-1.159-.792-2.053-1.364-2.684C10.34.828 9.709.512 9.02.512c-.719 0-1.357.33-1.914.99-.543.645-.96 1.555-1.254 2.728-.293 1.173-.44 2.515-.44 4.026Zm24.841 5.346c0 .675.088 1.166.264 1.474.19.308.514.462.968.462V16c-.454-.044-.91-.066-1.364-.066-1.525 0-2.801.103-3.828.308v-1.584c-.66 1.1-1.826 1.65-3.498 1.65-1.173 0-2.002-.293-2.486-.88-.22-.264-.381-.616-.484-1.056-.102-.455-.154-1.049-.154-1.782V6.98c0-.675-.095-1.166-.286-1.474-.176-.308-.491-.462-.946-.462v-.462c.455.044.91.066 1.364.066 1.526 0 2.802-.103 3.828-.308v9.438c0 .47.08.821.242 1.056.176.22.455.33.836.33a1.54 1.54 0 0 0 1.1-.44c.323-.308.484-.69.484-1.144v-6.6c0-.675-.095-1.166-.286-1.474-.176-.308-.491-.462-.946-.462v-.462c.455.044.91.066 1.364.066 1.526 0 2.802-.103 3.828-.308v9.262Zm10.122-9.328c.718 0 1.232.22 1.54.66.322.44.484.96.484 1.562 0 .66-.19 1.188-.572 1.584-.367.381-.85.572-1.452.572-.63 0-1.115-.14-1.452-.418-.337-.293-.506-.682-.506-1.166 0-.865.374-1.547 1.122-2.046-.264 0-.499.051-.704.154a2.167 2.167 0 0 0-.924.792c-.25.352-.374.74-.374 1.166v6.6c0 .69.14 1.166.418 1.43.293.25.785.374 1.474.374V16c-.19 0-.352-.007-.484-.022-1.54-.044-2.567-.066-3.08-.066-.455 0-1.474.022-3.058.066a3.873 3.873 0 0 1-.462.022v-.462c.455 0 .77-.11.946-.33.19-.235.286-.653.286-1.254V6.98c0-.675-.096-1.166-.286-1.474-.176-.308-.491-.462-.946-.462v-.462c.47.044.924.066 1.364.066 1.525 0 2.801-.103 3.828-.308v1.584c.557-1.1 1.503-1.65 2.838-1.65Zm5.422 11.88c-.94 0-1.65-.25-2.134-.748-.47-.513-.704-1.151-.704-1.914 0-.66.168-1.203.506-1.628.352-.44.762-.777 1.232-1.012.469-.235 1.078-.477 1.826-.726.792-.264 1.37-.506 1.738-.726.366-.22.55-.528.55-.924V6.518c0-.47-.118-.887-.352-1.254-.235-.367-.638-.55-1.21-.55-.455 0-.866.125-1.232.374.498.176.865.44 1.1.792.249.337.374.719.374 1.144 0 .572-.206 1.034-.616 1.386-.396.337-.88.506-1.452.506s-1.027-.176-1.364-.528c-.323-.367-.484-.829-.484-1.386 0-.44.11-.821.33-1.144.22-.323.564-.616 1.034-.88.82-.47 1.994-.704 3.52-.704.806 0 1.503.08 2.09.242a3.072 3.072 0 0 1 1.496.858c.293.308.484.697.572 1.166.102.455.154 1.093.154 1.914v5.896c0 .367.022.616.066.748.058.132.154.198.286.198.102 0 .212-.03.33-.088.117-.073.227-.154.33-.242l.22.374c-.631.543-1.533.814-2.706.814-.88 0-1.496-.147-1.848-.44-.352-.308-.543-.719-.572-1.232-.69 1.115-1.716 1.672-3.08 1.672Zm2.2-1.76c.308 0 .579-.125.814-.374V9.378c-.132.22-.374.506-.726.858-.396.381-.697.755-.902 1.122-.206.352-.308.836-.308 1.452 0 1.056.374 1.584 1.122 1.584Zm15.317-10.12c1.173 0 2.002.293 2.486.88.22.264.381.623.484 1.078.103.44.154 1.027.154 1.76v5.962c0 .601.088 1.02.264 1.254.19.22.513.33.968.33V16c-1.584-.059-2.61-.088-3.08-.088-.499 0-1.54.03-3.124.088v-.462c.381 0 .645-.11.792-.33.147-.235.22-.653.22-1.254v-7.15c0-.47-.088-.814-.264-1.034-.161-.235-.433-.352-.814-.352-.425 0-.8.154-1.122.462-.308.293-.462.667-.462 1.122v6.952c0 .601.073 1.02.22 1.254.147.22.41.33.792.33V16a92.29 92.29 0 0 0-2.904-.088c-.499 0-1.599.03-3.3.088v-.462c.455 0 .77-.11.946-.33.19-.235.286-.653.286-1.254V6.98c0-.675-.095-1.166-.286-1.474-.176-.308-.491-.462-.946-.462v-.462c.47.044.924.066 1.364.066 1.525 0 2.801-.103 3.828-.308v1.584c.66-1.1 1.826-1.65 3.498-1.65Zm7.7 8.25c.704 0 1.24.161 1.606.484.381.323.572.792.572 1.408 0 .616-.19 1.085-.572 1.408-.367.323-.902.484-1.606.484-.704 0-1.247-.161-1.628-.484-.367-.323-.55-.792-.55-1.408 0-.616.183-1.085.55-1.408.381-.323.924-.484 1.628-.484Zm9.421-8.25c.601 0 1.151.066 1.65.198.513.117.931.271 1.254.462.41.235.733.55.968.946.235.396.352.843.352 1.342 0 .616-.198 1.13-.594 1.54-.396.396-.902.594-1.518.594-.63 0-1.13-.176-1.496-.528-.352-.367-.528-.85-.528-1.452 0-.528.169-.99.506-1.386.352-.41.785-.682 1.298-.814-.22-.176-.513-.264-.88-.264-.939 0-1.599.506-1.98 1.518-.381.997-.572 2.185-.572 3.564 0 1.408.264 2.413.792 3.014s1.18.902 1.958.902c1.07 0 1.958-.491 2.662-1.474l.374.132a6.073 6.073 0 0 1-1.65 2.64c-.763.733-1.745 1.1-2.948 1.1-1.599 0-2.882-.477-3.85-1.43s-1.452-2.479-1.452-4.576c0-2.01.513-3.513 1.54-4.51 1.041-1.012 2.413-1.518 4.114-1.518Zm11.087 0c1.803 0 3.197.477 4.18 1.43.982.939 1.474 2.471 1.474 4.598s-.492 3.66-1.475 4.598c-.982.939-2.375 1.408-4.18 1.408-1.803 0-3.197-.47-4.18-1.408-.982-.939-1.473-2.471-1.473-4.598s.49-3.66 1.474-4.598c.982-.953 2.376-1.43 4.18-1.43Zm0 .44c-.47 0-.844.462-1.123 1.386-.278.924-.418 2.325-.418 4.202 0 1.877.14 3.278.419 4.202.278.91.652 1.364 1.121 1.364.47 0 .844-.455 1.123-1.364.278-.924.417-2.325.417-4.202 0-1.877-.139-3.278-.418-4.202-.278-.924-.652-1.386-1.121-1.386Zm25.017 9.24c0 .601.088 1.02.264 1.254.191.22.514.33.968.33V16c-1.584-.059-2.61-.088-3.08-.088-.469 0-1.437.03-2.904.088v-.462c.294 0 .499-.11.616-.33.118-.22.176-.638.176-1.254v-7.15c0-.47-.088-.814-.264-1.034-.161-.235-.432-.352-.814-.352-.381 0-.733.161-1.056.484a2.132 2.132 0 0 0-.572 1.144c.03.352.044.667.044.946v5.962c0 .616.074 1.034.22 1.254.147.22.411.33.792.33V16a93.347 93.347 0 0 0-2.86-.088c-.469 0-1.437.03-2.904.088v-.462c.294 0 .499-.11.616-.33.118-.235.176-.653.176-1.254v-7.15c0-.47-.066-.814-.198-1.034-.132-.235-.352-.352-.66-.352-.425 0-.799.154-1.122.462-.308.293-.462.667-.462 1.122v6.952c0 .616.059 1.034.176 1.254.118.22.323.33.616.33V16a77.858 77.858 0 0 0-2.684-.088c-.498 0-1.598.03-3.3.088v-.462c.455 0 .77-.11.946-.33.191-.235.286-.653.286-1.254V6.98c0-.675-.095-1.166-.286-1.474-.176-.308-.491-.462-.946-.462v-.462c.47.044.924.066 1.364.066 1.526 0 2.802-.103 3.828-.308v1.584c.616-1.1 1.709-1.65 3.278-1.65 1.174 0 2.002.293 2.486.88.22.264.382.609.484 1.034.367-.704.851-1.195 1.452-1.474.616-.293 1.35-.44 2.2-.44 1.174 0 2.002.293 2.486.88.22.264.382.623.484 1.078.103.44.154 1.027.154 1.76v5.962Z"></path>
                      </svg>
                    </button>
                  </Link>

                </div>

                <div
                  className={`logo_icon-menu duration-300 p-2 rounded-full cursor-pointer 
                    ${dark_mode
                      ? `hover:bg-icon_hover_color text-light_main_bg_color`
                      : `hover:bg-main_hover_color hover:text-light_main_txt_color`
                    }`}
                  onClick={() => set_Open_logo_images_setting(!open_logo_images_setting)}
                >

                  <IoClose className={`icon text-2xl`} />
                </div>

              </div>

              <div className="flex items-center justify-between h-fit w-full px-3">

                <div className={`flex flex-wrap gap-5 p-4  ${dark_mode ? `bg-dark_main_bg_color border border-border_color` : `bg-[#ebf9fa]`} rounded`}>

                  <h1 className={`${dark_mode ? `text-white` : `text-[#258c91]`}`}>كن متبرعا شهريا</h1>

                  <p className={`${dark_mode ? `text-white` : `text-[#258c91]`}`}>تساعدنا التبرعات الشهرية على تحسين موقع Quran.com واستدامة العمليات حتى نركز بشكل أقل على جمع التبرعات وأكثر على إحداث التأثير.</p>

                  <div className="flex items-center gap-5 ">
                    <button dir="rtl" className={`p-2 ${dark_mode ? `bg-dark_main_bg_color text-white` : `bg-[#000] text-[#fff] `}  rounded`} >
                      <span className="">تبرع شهريا</span>
                    </button>
                    <Link to={`https://donate.quran.foundation`} target="_blank" rel="noreferrer">
                      <div dir="rtl" className={`border-b  ${dark_mode ? `border-border_color text-white` : `border-[#000] text-black `} decoration-2`} >
                        <span className=" ">تعرف على المزيد</span>
                      </div>
                    </Link>
                  </div>

                </div>

              </div>

              <div className="logo-images_setting_nav flex items-center justify-between h-fit w-full ">
                <nav className="w-full">
                  <ul className="w-full">
                    <li className="w-full border-b p-5">
                      <Link to={`/`} className={`cursor-pointer ${dark_mode ? `text-light_main_txt_color` : `text-light_second_bg_color`} w-full flex items-center gap-5`}>
                        <button
                          className={`w-full flex items-center gap-5`}
                          onClick={() => set_Open_logo_images_setting(false)}
                        >
                          <span> <IoHomeSharp /> </span>
                          <span> الصفحة الرئيسة  </span>

                        </button>

                      </Link>
                    </li>
                    <li className="w-full border-b p-5">
                      <Link to={`/radioFm`} className={`cursor-pointer ${dark_mode ? `text-light_main_txt_color` : `text-light_second_bg_color`} w-full flex items-center gap-5`}>
                        <button
                          className={`w-full flex items-center gap-5`}
                          onClick={() => set_Open_logo_images_setting(false)}
                        >
                          <span> <IoMdRadio /> </span>
                          <span>  راديو القرآن  </span>
                        </button>
                      </Link>
                    </li>
                    <li className="w-full border-b p-5">
                      <Link to={``} className={`${dark_mode ? `text-light_main_txt_color` : `text-light_second_bg_color`} w-full flex items-center gap-5`}>
                        <button
                          className={`w-full flex items-center gap-5`}
                          onClick={() => set_Open_logo_images_setting(false)}
                        >

                          <span> <IoInformationCircle /> </span>
                          <span> معلومات عنا   </span>
                        </button>

                      </Link>
                    </li>
                  </ul>
                </nav>

              </div>

            </div>

          </div>

          <div className="logo_icons flex justify-between items-center">

            <div className="logo_icons_container flex items-center gap-2">

              <div className="login flex justify-center items-center">
                <Link to={`/login`} className={`signIn_Icon group relative duration-500 p-2 rounded-full  cursor-pointer
                    ${dark_mode ? `hover:bg-icon_hover_color text-light_main_bg_color ` : `hover:bg-main_hover_color hover:text-light_main_txt_color`} `}
                >
                  <IoPersonOutline className={`icon text-2xl`} />
                  <span
                    className={`hidden z-10 group-hover:flex p-2 justify-center items-center text-sm  rounded-lg absolute top-[127%] left-[50%] translate-x-[-50%] w-max after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]  after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent
                 ${dark_mode
                        ? `bg-dark_main_tooltip_color text-dark_main_txt_color`
                        : `bg-light_main_tooltip_color text-light_main_txt_color after:border-dark_border_color`
                      }`}
                  >
                    تسجيل الدخول
                  </span>
                </Link>

              </div>

              <div className={`language_icon group relative duration-500 p-2 rounded-full cursor-pointer
                     ${dark_mode
                  ? `hover:bg-icon_hover_color text-light_main_bg_color`
                  : `hover:bg-main_hover_color hover:text-light_main_txt_color  `
                } `}
                onClick={() => set_Open_Sidebar_Language(!open_Sidebar_Language)}
              >
                <IoGlobeOutline className={`icon text-2xl`} />
                <span
                  className={`hidden z-10 group-hover:flex p-2 justify-center items-center text-sm rounded-lg absolute top-[127%] left-[50%] translate-x-[-50%] w-max after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]   after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent
                 ${dark_mode
                      ? `bg-dark_main_tooltip_color text-dark_main_txt_color`
                      : `bg-light_main_tooltip_color text-light_main_txt_color after:border-dark_border_color`
                    }`}
                >
                  {" "}
                  اللغات{" "}
                </span>
              </div>

              <div className={`setting_icon group relative duration-500 p-2 rounded-full cursor-pointer
                    ${dark_mode
                  ? `hover:bg-icon_hover_color text-light_main_bg_color`
                  : `hover:bg-main_hover_color hover:text-light_main_txt_color`
                }`}
                onClick={() => set_Open_Sidebar_Setting(true)}
              >
                <IoSettingsOutline className={`icon text-2xl`} />
                <span
                  className={`hidden z-10 group-hover:flex p-2 justify-center items-center text-sm rounded-lg absolute top-[127%] left-[50%] translate-x-[-50%] w-max  after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]  after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent
                ${dark_mode
                      ? `bg-dark_main_tooltip_color text-dark_main_txt_color`
                      : `bg-light_main_tooltip_color text-light_main_txt_color after:border-dark_border_color`
                    }  `}
                >
                  {" "}
                  الاعدادات{" "}
                </span>
              </div>

              <div className={`search_icon group relative duration-500 p-2 rounded-full cursor-pointer
                    ${dark_mode
                  ? `hover:bg-icon_hover_color text-light_main_bg_color`
                  : `hover:bg-main_hover_color hover:text-light_main_txt_color`
                } `}
              >
                <button
                  className="flex items-center"
                  onClick={() => set_Open_Sidebar_Search(true)}
                >
                  <IoSearchOutline className={`icon text-2xl`} />

                  <span
                    className={`hidden z-50 group-hover:flex py-1 px-2 justify-center items-center text-sm rounded-lg absolute top-[120%] left-[50%] translate-x-[-50%] w-max  after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]  after:border-[6px] after:border-t-[transparent] after:border-r-[transparent] after:border-l-[transparent]
                  ${dark_mode
                        ? `bg-dark_main_tooltip_color text-dark_main_txt_color after:border-b-second_border_color`
                        : `bg-light_main_tooltip_color text-light_main_txt_color after:border-dark_border_color `
                      } `}
                  >
                    بحث
                  </span>
                </button>
              </div>

            </div>

            <div className="sidebar_search">

              <div className={`sidebar_search z-10 w-full sm:w-[370px] flex flex-col pt-2 fixed left-0 top-0 duration-1000 h-screen 
                      ${open_Sidebar_Search ? `duration-1000 translate-x-0 flex` : `translate-x-[-640px] hidden`} 
                     ${dark_mode ? `bg-dark_second_bg_header_color shadow-inner border border-border_color rounded-br-md rounded-tr-lg` : `bg-light_sidebar shadow-inner`} `}
              >
                <div
                  className={`w-full flex p-2 border-b ${dark_mode ? `border-[#505050]` : `border-[#DDD]`
                    } `}
                >

                  <div className="sidebar_top_search w-full flex items-center justify-between gap-3" dir="rtl">

                    <div
                      className={` colse_sidbar-icon relative p-1 group hover:bg-[#555] rounded-full  ${dark_mode ? ` hover:bg-[#666666]` : ` hover:bg-[#DDD]`}`}
                    >
                      <button className="flex justify-center items-center duration-1000 hover:rotate-[360deg]">
                        <IoSearchOutline className="icon text-main_hover_color text-3xl" />
                      </button>

                      <div className="hidden justify-center items-center group-hover:flex">
                        <span
                          className={` absolute left-[50%] translate-x-[-50%] top-[130%]  w-max rounded-xl px-2 py-1 after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]   after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent
                                       ${dark_mode ? ` bg-light_main_bg_color text-dark_main_txt_color after:border-light_sidebar` : ` bg-black text-light_main_txt_color after:border-dark_border_color`
                            }`}
                        >
                          بحث
                        </span>
                      </div>

                    </div>

                    <div className="sidebar_search_form w-full flex grow ">
                      <form
                        className={` flex grow relative rounded-full after:rounded-full before:rounded-full border-r-[3px] border-l-[3px] duration-100 after:duration-500 before:duration-500  hover:border-l-[3px] border-main_hover_color after:content-[''] after:absolute after:top-0  after:right-3  after:bg-main_hover_color after:w-1/4 hover:after:w-[calc(100%-25px)]  after:h-[1px] before:absolute  before:bottom-0 before:right-3  before:bg-main_hover_color before:w-1/4  hover:before:w-[calc(100%-25px)]  before:h-[1px] `}
                      >
                        <input type="text" className={`input_search w-full flex py-2 px-2 pe-4 outline-none bg-inherit text-end 
                              ${dark_mode
                            ? `text-light_main_txt_color`
                            : `text-dark_main_txt_color`
                          } `}
                          placeholder="بحث"
                          onChange={() => setFocus_input(true)}
                        />

                        <div
                          className={`absolute left-1 top-[5px]  
                              ${dark_mode
                              ? `text-light_main_txt_color`
                              : `text-dark_main_txt_color`
                            } 
                              ${focus_input ? "flex" : "hidden"}
                             `}
                        >
                          <button
                            className={`px-4 py-[7px] relative top-[-4px] left-[-1px] rounded-full leading-[1] ${dark_mode
                              ? `bg-dark_second_bg_header_color`
                              : `bg-light_main_bg_color`
                              }`}
                            onClick={clear_Input_search}
                          >
                            مسح
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="">
                      <button>
                        <FaMicrophone
                          className={`icon-micro text-main_hover_color text-xl `}
                        />
                      </button>
                    </div>

                    <div
                      className={` colse_sidbar-icon relative p-1 group hover:bg-[#555] rounded-full 
                                    ${dark_mode ? ` hover:bg-[#666666]` : ` hover:bg-[#DDD]`}
                                  `}
                    >
                      <button
                        className="flex justify-center items-center duration-1000 hover:rotate-[360deg]"
                        onClick={() => {
                          set_Open_Sidebar_Search(false);
                          setFocus_input(false);
                          document.querySelector(".input_search").value = "";
                        }}
                      >
                        <IoClose className="icon-close text-main_hover_color text-3xl" />
                      </button>

                      <div className="hidden justify-center items-center group-hover:flex">
                        <span
                          className={` absolute left-[50%] translate-x-[-50%] top-[130%]  w-max rounded-xl px-2 py-1 after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]   after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent
                                       ${dark_mode ? ` bg-light_main_bg_color text-dark_main_txt_color after:border-light_sidebar` : ` bg-black text-light_main_txt_color after:border-dark_border_color`
                            }`}
                        >
                          اغلاق
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className={`sidebar_Setting z-10 gap-3 w-full sm:w-[370px] flex flex-col pt-2 fixed left-0 top-0 h-screen border-r
                  ${dark_mode
                ? `bg-dark_second_bg_header_color border-[#5d5d5d]`
                : `bg-light_sidebar border-[#c2c2c2]`
              }  
            ${open_Sidebar_Setting
                ? `translate-x-0 flex`
                : `translate-x-[-640px] hidden`
              } 
            `}
            >
              <div
                className={`w-full flex p-2 border-b pb-2 ${dark_mode ? `border-[#505050]` : `border-[#DDD]`
                  } `}
              >
                <div
                  className="search_sidebar-top w-full flex items-center justify-between gap-5"
                  dir="rtl"
                >
                  <div className="search_sidebar_search_icon px-2 duration-700 hover:scale-110">
                    <button className="flex items-center cursor-pointer ">
                      <span
                        className={`icon text-2xl 
                      ${dark_mode
                            ? ` text-light_main_txt_color`
                            : ` text-dark_main_txt_color`
                          }`}
                      >
                        {" "}
                        الاعدادات{" "}
                      </span>
                    </button>
                  </div>

                  <div
                    className={` colse_sidbar-icon relative p-1 group hover:bg-[#555] rounded-full 
                ${dark_mode ? ` hover:bg-[#666666]` : ` hover:bg-[#DDD]`}
                `}
                  >
                    <button
                      className="flex justify-center items-center duration-1000 hover:rotate-[360deg]"
                      onClick={() => {
                        set_Open_Sidebar_Setting(false);
                      }}
                    >
                      <IoClose
                        className={`icon text-main_hover_color text-3xl 
                      ${dark_mode
                            ? ` text-light_main_txt_color`
                            : ` text-dark_main_txt_color`
                          }`}
                      />
                    </button>
                    <div className="hidden justify-center items-center group-hover:flex">
                      <span
                        className={` absolute left-[50%] translate-x-[-50%] top-[130%]  w-max rounded-xl px-2 py-1 after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]   after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent
                  ${dark_mode
                            ? ` bg-light_main_bg_color text-dark_main_txt_color after:border-light_sidebar`
                            : ` bg-black text-light_main_txt_color after:border-dark_border_color`
                          }
                  `}
                      >
                        اغلاق
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 px-3 ">
                <div
                  className={`w-full flex items-center justify-center  p-3 text-xl ${dark_mode
                    ? ` text-light_main_txt_color`
                    : ` text-dark_main_txt_color`
                    } `}
                >
                  <span className=" px-2 py-1 leading-[1] border border-[#ddd] rounded"> السمة </span>

                </div>

                <div
                  className={`w-full flex items-center justify-between px-3 py-[6px]  rounded-3xl
                ${dark_mode ? ` bg-[#212529]` : `bg-[#f4f4f4] `}`}
                  dir="rtl"
                >
                  <div
                    className={` flex justify-between items-center  cursor-pointer rounded-full 
                  ${dark_mode
                        ? `  text-light_main_txt_color `
                        : ` bg-light_main_bg_color text-dark_main_txt_color `
                      }`}
                    onClick={() => {
                      dispatch(Lightmode());
                      document
                        .querySelector(".icon_light_mode")
                        .classList.toggle("hidden");
                      document
                        .querySelector(".icon_dark_mode")
                        .classList.add("hidden");
                    }}
                  >
                    <div className="flex justify-center items-center text-2xl py-[6px] px-2">
                      <IoSunnyOutline className="icon_light_mode " />
                    </div>

                    <div
                      className={`py-[6px] px-2 duration-300 rounded-2xl cursor-pointer
                    ${dark_mode
                          ? ` text-light_main_bg_color `
                          : ` text-dark_main_txt_color`
                        }
                     `}
                    >
                      فاتح
                    </div>
                  </div>

                  <div
                    className={` flex justify-between items-center cursor-pointer rounded-full 
                ${dark_mode
                        ? ` bg-[#464646] text-light_main_txt_color `
                        : `  text-dark_main_txt_color `
                      }`}
                    onClick={() => {
                      dispatch(Drakmode());
                      document
                        .querySelector(".icon_dark_mode")
                        .classList.toggle("hidden");
                      document
                        .querySelector(".icon_light_mode")
                        .classList.add("hidden");
                    }}
                  >
                    <div className="flex justify-center items-center text-2xl py-[6px] px-2">
                      <IoMoonOutline className="icon_dark_mode hidden" />
                    </div>

                    <div
                      className={`py-[6px] px-2 duration-300 rounded-2xl cursor-pointer
                  ${dark_mode
                          ? ` text-light_main_bg_color `
                          : ` text-dark_main_txt_color`
                        }
                   `}
                    >
                      داكن
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`sidebar_language z-10 flex flex-wrap gap-3 p-3 rounded-b-xl w-1/2 sm:w-1/4 lg:w-1/5 duration-700 absolute left-0 top-full border 
                  ${open_Sidebar_Language
                ? ` flex`
                : ` hidden`
              } 
                 ${dark_mode
                ? `bg-dark_second_bg_header_color border-[#666666]`
                : `bg-light_main_bg_color border-[#DDD]`
              }`}
            >
              <div className={`w-full p-3 rounded-full duration-500 cursor-pointer  text-center 
              ${dark_mode
                  ? `text-light_main_txt_color  hover:bg-second_hover_color`
                  : `text-main_hover_color  hover:bg-main_hover_color hover:text-light_main_txt_color`
                }`}
              >
                English
              </div>

              <div
                className={`w-full p-3 rounded-full duration-500 cursor-pointer  text-center
              ${dark_mode
                    ? `text-light_main_txt_color  hover:bg-second_hover_color`
                    : `text-main_hover_color  hover:bg-main_hover_color hover:text-light_main_txt_color`
                  }  `}
              >
                Arabic
              </div>
            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default HeaderPage;
