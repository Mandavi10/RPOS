<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MenuReport.aspx.cs" Inherits="FRDWeb.Reports.MenuReport" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=12.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=12.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91"
    Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

    <script>
    jquery_min_p(document).ready(function () {
        var id = '@Request.RequestContext.HttpContext.Session["CurrentRestroId"]';
        jquery_min_p("#lblrestroid").text(id);

        // jquery_min_p('#defineRestro').css('display', 'block');<rsweb:ReportViewer runat="server"></rsweb:ReportViewer>
       // alert('id:' + id);

    })


    </script>


<head runat="server">
    <title></title>
</head>
<body>

    <form id="form1" runat="server">
    <div>
        <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
        <rsweb:ReportViewer ID="ReportViewer" runat="server"></rsweb:ReportViewer>
        <label id="lblrestroid" style="display: none" />
    </div>
    </form>
</body>
</html>
