/**
 * VWD温馨家园 - 主JavaScript文件
 * Main JavaScript File for VWD Home
 * 
 * 功能说明：
 * 1. 移动端导航菜单切换
 * 2. FAQ折叠面板展开/收起
 * 3. 侧边栏导航锚点高亮
 */

document.addEventListener('DOMContentLoaded', function() {
  // ========== 功能1: 移动端导航菜单切换 ==========
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      // 切换菜单的active类，实现展开/收起
      mainNav.classList.toggle('active');
      
      // 改变按钮的外观（可选：添加激活状态样式）
      this.classList.toggle('active');
    });

    // 点击菜单项后自动收起菜单（提升用户体验）
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        // 如果是移动端视图，点击后收起菜单
        if (window.innerWidth <= 768) {
          mainNav.classList.remove('active');
          mobileMenuBtn.classList.remove('active');
        }
      });
    });

    // 点击页面其他区域时收起菜单
    document.addEventListener('click', function(event) {
      const isClickInsideNav = mainNav.contains(event.target);
      const isClickOnBtn = mobileMenuBtn.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnBtn && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });

    // 窗口大小改变时，如果切换到桌面端，确保菜单可见
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
  }

  // ========== 功能2: FAQ折叠面板展开/收起 ==========
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        // 获取当前点击的问题所在的faq-item
        const faqItem = this.parentElement;
        
        // 获取对应的答案区域
        const faqAnswer = faqItem.querySelector('.faq-answer');
        
        // 切换active类
        faqItem.classList.toggle('active');
        
        // 如果要实现手风琴效果（同一时间只能展开一个），可以取消下面的注释：
        /*
        // 关闭其他所有展开的FAQ
        document.querySelectorAll('.faq-item').forEach(item => {
          if (item !== faqItem && item.classList.contains('active')) {
            item.classList.remove('active');
          }
        });
        */
      });
    });
  }

  // ========== 功能3: 侧边栏导航锚点高亮（仅在knowledge.html使用）==========
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  const contentSections = document.querySelectorAll('.content-section[id]');
  
  if (sidebarLinks.length > 0 && contentSections.length > 0) {
    // 使用Intersection Observer API检测当前可见的section
    const observerOptions = {
      root: null, // 使用视口作为root
      rootMargin: '-20% 0px -70% 0px', // 调整检测区域
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          
          // 移除所有active类
          sidebarLinks.forEach(link => {
            link.classList.remove('active');
          });
          
          // 为当前可见section对应的链接添加active类
          const activeLink = document.querySelector(`.sidebar-nav a[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    // 观察所有section
    contentSections.forEach(section => {
      observer.observe(section);
    });
  }

  // ========== 功能4: 平滑滚动到锚点（增强用户体验）==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      // 如果只是#，不做处理
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navHeight = document.querySelector('header')?.offsetHeight || 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== 功能5: 添加滚动时导航栏阴影效果 ==========
  const header = document.querySelector('header');
  let lastScrollTop = 0;
  
  if (header) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 10) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
      } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      }
      
      lastScrollTop = scrollTop;
    });
  }

  // ========== 功能6: 懒加载图片（性能优化）==========
  const images = document.querySelectorAll('img[data-src]');
  
  if (images.length > 0 && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      imageObserver.observe(img);
    });
  }

  console.log('VWD温馨家园 - JavaScript已加载完成');
});
