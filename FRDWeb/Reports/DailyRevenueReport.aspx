<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DailyRevenueReport.aspx.cs" Inherits="FRDWeb.Reports.DailyRevenueReport" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=12.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91"
     Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb1" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=12.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91"
    Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb1" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
    <rsweb1:ReportViewer ID="ReportViewer1" runat="server"></rsweb1:ReportViewer>

    </div>
    </form>
</body>
</html>
