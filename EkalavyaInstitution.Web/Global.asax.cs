

using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace EkalavyaInstitution.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            //var container = new Container();
            //// Register your types, for instance:
            //container.Register<IGalleryService, GalleryCoreService>();
            //container.Register<IGalleryRepository, GalleryRepository>();
            //container.Register<IGalleryWebService, GalleryWebService>();
            //container.Register<IUserCoreService, UserCoreService>();
            //container.Register<IUserWebService, UserWebService>();
            //container.Register<IUserRepository,UserRepository>();
            //container.Register<IEventWebService, EventWebSevice>();
            //container.Register<IEventRepository, EventRepository>();
            //container.Register<IEventCoreService, EventCoreService>();
            //container.RegisterMvcControllers(Assembly.GetExecutingAssembly());
            //container.Verify();
            //DependencyResolver.SetResolver(new SimpleInjectorDependencyResolver(container));
            //Mapper.Initialize(cfg =>
            //{
            //    cfg.CreateMap<GalleryDetails, GalleryDetailView>();
            //    cfg.CreateMap<LoginView, UserLogin>();
            //    cfg.CreateMap<EventDetailView, EventDetails>();
            //    cfg.CreateMap<EventTypeData,EventTypesView>();
            //    cfg.CreateMap<Events, EventsView>();
            //    cfg.CreateMap<EventDetails, EventDetailView>();
            //    cfg.CreateMap<EventFormDetails, EventFormDetailView>();

            //});
        }
    }
}
