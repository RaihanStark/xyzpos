import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import DashboardSidebar from "../../containers/DashboardSidebar/DashboardSidebar";
import theme from "../../theme";
import Button from "../../components/Button/Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const StyledDashboard = styled.div`
  background-color: #f9f9f9 !important;
  height: 100vh;

  /* Reset */
  html,
  body,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  font,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  fieldset,
  form,
  label,
  legend,
  caption {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
`;

const DashboardContent = styled.div`
  margin-left: 315px;
  ${({ sidebarClosed }) =>
    sidebarClosed &&
    css`
      margin-left: 90px !important;
    `}
  padding: 2rem;

  h1 {
    font-size: 2rem;
  }
`;

const ReportStatistics = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const ReportCard = styled.div`
  background-color: ${theme.primary};
  padding: 1rem;
  color: white;
  border-radius: 1rem;
  flex-grow: 1;

  box-shadow: 0 3px 6px 0px #88888836;
`;

const ReportName = styled.div`
  font-size: 0.9rem;
`;

const ReportValue = styled.div`
  font-size: 1.5rem;
`;

const SalesStatistics = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 3px 6px 0px #88888836;

  table,
  th,
  td {
    border: 1px solid #c8c8c8;
    font-size: 1rem;
  }

  th,
  td {
    font-weight: 500;
    text-align: left;
    padding: 0.75rem 1rem;
  }

  th:nth-child(4),
  th:nth-child(5),
  td:nth-child(5) {
    text-align: center;
  }

  td:nth-child(4),
  td:nth-child(6) {
    text-align: right;
  }

  td:nth-child(7) {
    a {
      width: 100%;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  div {
    font-size: 0.9rem;
  }
`;

const ReportTable = styled.div`
  overflow-x: auto;
`;

function Dashboard() {
  const accountDetail = useSelector((state) => state.account);
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [report, setReport] = useState({});
  const { width } = useWindowDimensions();

  useEffect(() => {
    axios.get("http://localhost:3001/report").then((res) => {
      setReport(res.data);
    });
  }, []);

  useEffect(() => {
    if (width < 1260) {
      setSidebarClosed(true);
    } else {
      setSidebarClosed(false);
    }
  }, [width]);

  return (
    <StyledDashboard>
      <DashboardContent sidebarClosed={sidebarClosed}>
        <p>Dashboard</p>
        <h1>
          Halo,{" "}
          {accountDetail.name.includes(" ")
            ? accountDetail.name.split(" ")[0]
            : accountDetail.name}
          !
        </h1>

        <ReportStatistics>
          {report.summary === undefined
            ? "Loading..."
            : report.summary.map((item, i) => {
                return (
                  <ReportCard key={i}>
                    <ReportName>{item.name}</ReportName>
                    <ReportValue>{item.value}</ReportValue>
                  </ReportCard>
                );
              })}
        </ReportStatistics>

        <SalesStatistics>
          <h2>Penjualan Hari Ini</h2>
          <div>Kamis, 13 Agustus 2020</div>

          <ReportTable>
            <table>
              <thead>
                <tr>
                  <th>Jam</th>
                  <th>Customer</th>
                  <th>Barang</th>
                  <th>Harga Barang</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {report.sales === undefined ? (
                  <p>Loading...</p>
                ) : (
                  report.sales.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item.time}</td>
                        <td>{item.customer}</td>
                        <td>{item.item}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.total}</td>
                        <td>
                          <Button
                            as="button"
                            variant="primary"
                            style={{ fontSize: "1rem", width: "100%" }}
                          >
                            Lihat Detail
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </ReportTable>
        </SalesStatistics>
      </DashboardContent>
      <DashboardSidebar
        sidebarClosed={sidebarClosed}
        setSidebarClosed={setSidebarClosed}
        accountDetail={accountDetail}
      />
    </StyledDashboard>
  );
}

export default Dashboard;
