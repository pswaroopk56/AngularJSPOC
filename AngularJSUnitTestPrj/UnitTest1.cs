using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AngularJSPOC.Controllers;
using System.Web.Mvc;

namespace AngularJSUnitTestPrj
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestContactView()
        {
            CustomController obj = new CustomController();
            var result = obj.ReturnViews(1) as ViewResult;
            Assert.AreEqual("Contact", result.ViewName);
        }

        [TestMethod]
        public void TestAboutViews()
        {
            CustomController obj = new CustomController();
            var result = obj.ReturnViews(2) as ViewResult;
            Assert.AreEqual("About", result.ViewName);
        }

        [TestMethod]
        public void TestTempData()
        {
            CustomController obj = new CustomController();
            var result = obj.ReturnTempData(1) as ViewResult;
            Assert.AreEqual("Swaroop", result.TempData["name"]);
        }

        [TestMethod]
        public void TestViewData()
        {
            CustomController obj = new CustomController();
            var result = obj.ReturnViewData(1) as ViewResult;
            Assert.AreEqual("Swaroop Kumar", result.ViewData["name"]);
        }
    }
}
