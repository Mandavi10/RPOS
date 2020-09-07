using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FRDWeb.Startup))]
namespace FRDWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
