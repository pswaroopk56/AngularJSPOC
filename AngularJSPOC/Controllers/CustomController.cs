using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace AngularJSPOC.Controllers
{
    public class CustomController : Controller
    {
        public ActionResult ReturnViews(int type)
        {
            if (type == 1)
                return View("Contact");
            else if (type == 2)
                return View("About");
            else
                return Content("View does not match with parameter");
        }

        public ActionResult ReturnTempData(int type)
        {
            if (type == 1)
            {
                TempData["name"] = "Swaroop";
                return View("Contact");
            }
            else if (type == 2)
            {
                return View("About");
            }
            else
                return Content("View does not match with parameter");
        }

        public ActionResult ReturnViewData(int type)
        {
            if (type == 1)
            {
                ViewData["name"] = "Swaroop";
                return View("Contact");
            }
            else if (type == 2)
            {
                return View("About");
            }
            else
                return Content("View does not match with parameter");
        }
    }
}
