import styled, { css } from "styled-components";
import CloseSvg from "../../components/CloseSvg/CloseSvg";
import AccountSvg from "../../components/AccountSvg/AccountSvg";
import theme from "../../theme";
import DashboardSvg from "../../components/DashboardSvg/DashboardSvg";
import ProductSvg from "../../components/ProductSvg/ProductSvg";
import ReportSvg from "../../components/ReportSvg/ReportSvg";
import SettingsSvg from "../../components/SettingsSvg/SettingsSvg";
import HamburgerSvg from "../../components/HamburgerSvg/HamburgerSvg";
import { logOut } from "../../redux";
import { useDispatch } from "react-redux";
import { setModalOpened, setModalNameOpened } from "../../redux/";

const StyledSidebar = styled.div`
  transition: all 200ms ease;
  background-color: white !important;
  box-shadow: -13px 0px 20px 0px #888888;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 315px;

  ${({ sidebarClosed }) =>
    sidebarClosed &&
    css`
      width: 90px;

      .close-sidebar {
        display: flex;
        justify-content: center;
      }
    `}
`;

const SidebarHeader = styled.div`
  padding: 2rem 1rem 1rem 1rem;

  .close-sidebar {
    cursor: pointer;
  }
`;

const StyledAccount = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const AccountImage = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-left: 0.2rem;
`;

const AccountInfo = styled.div`
  ${({ sidebarClosed }) =>
    sidebarClosed &&
    css`
      display: none;
    `}
  .account-name {
    font-size: 1.3rem;
  }

  .account-email,
  .account-logout {
    font-size: 0.9rem;
  }

  .account-logout button {
    border: none;
    background: none;
    padding: 0;
    font-size: 0.9rem;
    cursor: pointer;
    color: ${theme.primary};
  }
`;

const SidebarMenu = styled.ul``;
const MenuItem = styled.li`
  display: flex;
  padding: 0.75rem 1.25rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;

  ${({ sidebarClosed }) =>
    sidebarClosed &&
    css`
      svg {
        margin-right: 0 !important;
      }
    `}
  &:hover,
  &.active {
    background-color: #dfdfdf;
    cursor: pointer;
    border-left: 5px solid ${theme.primary};
    padding-left: calc(1.25rem - 5px);
  }

  svg {
    margin-right: 1rem;
  }

  .arrow {
    border: solid black;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 11px;
    margin-left: auto;
  }

  .right {
    transform: rotate(-45deg) scale(0.4);
    -webkit-transform: rotate(-45deg) scale(0.4);
  }
`;

const ItemDetail = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

function DashboardSidebar({ accountDetail, sidebarClosed, setSidebarClosed }) {
  const dispatch = useDispatch();
  const handleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  const handleLogOut = () => {
    alert("Log out Success");
    dispatch(logOut());
    dispatch(setModalOpened(false));
    dispatch(setModalNameOpened(""));
  };
  return (
    <StyledSidebar sidebarClosed={sidebarClosed}>
      <SidebarHeader>
        <div className="close-sidebar" onClick={handleSidebar}>
          {sidebarClosed ? (
            <HamburgerSvg variant="red" size={25} />
          ) : (
            <CloseSvg size={36} />
          )}
        </div>
        <StyledAccount>
          <AccountImage>
            <AccountSvg size={50} />
          </AccountImage>
          {sidebarClosed ? null : (
            <AccountInfo>
              <div className="account-name">{accountDetail.name}</div>
              <div className="account-email">{accountDetail.email}</div>
              <div className="account-logout">
                <button onClick={handleLogOut}>Keluar</button>
              </div>
            </AccountInfo>
          )}
        </StyledAccount>
      </SidebarHeader>

      <SidebarMenu>
        <MenuItem className="active" sidebarClosed={sidebarClosed}>
          <DashboardSvg size={24} />

          {sidebarClosed ? null : (
            <ItemDetail>
              Dashboard
              <i className="arrow right"></i>
            </ItemDetail>
          )}
        </MenuItem>
        <MenuItem sidebarClosed={sidebarClosed}>
          <ProductSvg size={24} />
          {sidebarClosed ? null : (
            <ItemDetail>
              Produk<i className="arrow right"></i>
            </ItemDetail>
          )}
        </MenuItem>
        <MenuItem sidebarClosed={sidebarClosed}>
          <ReportSvg size={24} />
          {sidebarClosed ? null : (
            <ItemDetail>
              Laporan<i className="arrow right"></i>
            </ItemDetail>
          )}
        </MenuItem>
        <MenuItem sidebarClosed={sidebarClosed}>
          <SettingsSvg size={24} />
          {sidebarClosed ? null : (
            <ItemDetail>
              Pengaturan<i className="arrow right"></i>
            </ItemDetail>
          )}
        </MenuItem>
      </SidebarMenu>
    </StyledSidebar>
  );
}

export default DashboardSidebar;
