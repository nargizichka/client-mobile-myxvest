import Cog from "../assets/image/svg/cog.svg"

const Footer = () => {
  return (
    <div>
            <footer>
              <span>
                © <b>Sysdc.uz</b> - 2019-2025
              </span>
              <div style={{ float: "right" }}>
                <a href="/settings">
                  <img
                    src={Cog}
                    style={{
                      borderRadius: "58%",
                      width: 19,
                      height: 18,
                      marginRight: 5
                    }}
                  />{" "}
                  <b>Настройки сайта</b>
                </a>
              </div>
            </footer>
         
    </div>
  )
}

export default Footer
