using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJSPOC.Startup))]
namespace AngularJSPOC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
