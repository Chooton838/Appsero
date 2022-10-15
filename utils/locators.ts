let login_locator: { email, pass, submit: string } = {
    email: '//input[@type="email"]',
    pass: '//input[@type="password"]',
    submit: '.appsero__submit_btn',
};

let plugin_locator: {
    navigate, add_plugin, free_plugin, pro_plugin, manual_entry, name, slug, plugin_version, php_version_select, php_version,
    wp_version_select, wp_version, tested_upto_version_select, tested_upto_version, submit, yes, wcom_map, use_appsero, select_website,
    website_click, select_product, product_click, skip, next, done, complete: string} = {
        
    navigate: '//span[text()="Plugins"]',
    add_plugin: '(//span[text()="Add Plugins"])[1]',
    free_plugin: '//button[contains(text(), "No, It\'s a free plugin")]',
    pro_plugin: '//button[contains(text(), "Yes, It\'s a premium plugin")]',
    manual_entry: '//a[contains(text(), "Manual Entry")]',
    name: '#name',
    slug: '#slug',
    plugin_version: '#version',

    php_version_select: '(//div[@class="ant-select-selection__rendered"])[1]',
    php_version: '(//input[@autocomplete="off"])[1]',
    wp_version_select: '(//div[@class="ant-select-selection__rendered"])[2]',
    wp_version: '(//input[@autocomplete="off"])[2]',
    tested_upto_version_select: '(//div[@class="ant-select-selection__rendered"])[3]',
    tested_upto_version: '(//input[@autocomplete="off"])[3]',

    submit: '//button[@type="submit"]',
    yes: '//span[text()="Yes"]',
    wcom_map: '//p[text()="WooCommerce + WooCommerce API Manager"]',
    use_appsero: '//strong[text()="Use Appsero"]',
    select_website: '//div[text()="Select Website"]',
    website_click: '//li[text()=" https://auto-appsero.s3-tastewp.com "]',
    select_product: '//div[text()="Select Product"]',
    product_click: '//li[text()=" Test Product 1 "]',
    skip: '//a[contains(text(), "Skip")]',
    next: '//span[contains(text(), "Next")]',
    done: '//button[contains(text(), "Done")]',
    complete: '//span[contains(text(), "Done")]',

    // Release Locators
    // release: '//span[text()="Releases"]',
    // add_new_elease: '//span[text()="Add New Release"]',
};

let theme_locator: {
    navigate, add_theme, free_theme, pro_theme, manual_entry, name, slug, theme_version, submit, yes, wcom_map, use_appsero,
    select_website, select_product, skip, next, done, complete: string } = {
        
    navigate: '//span[text()="Themes"]',
    add_theme: '(//span[text()="Add Themes"])[1]',
    free_theme: '//button[contains(text(), "No, It\'s a free theme")]',
    pro_theme: '//button[contains(text(), "Yes, It\'s a premium theme")]',
    manual_entry: '//a[contains(text(), "Manual Entry")]',
    name: '#name',
    slug: '#slug',
    theme_version: '#version',
    submit: '//button[@type="submit"]',

    yes: '//span[text()="Yes"]',
    wcom_map: '//p[text()="WooCommerce + WooCommerce API Manager"]',
    use_appsero: '//strong[text()="Use Appsero"]',
    select_website: '//div[text()="Select Website"]',
    select_product: '//div[text()="Select Product"]',
    
    skip: '//a[contains(text(), "Skip")]',
    next: '//span[contains(text(), "Next")]',
    done: '//button[contains(text(), "Done")]',
    complete: '//span[contains(text(), "Done")]',
};

let bundle_locator: {
    navigate, add_bundle, name, slug, select_products, submit, yes, wcom_map, use_appsero,
    select_website, select_product, next: string } = {
        
    navigate: '//span[text()="Bundles"]',
    add_bundle: '(//span[text()="Add Bundles"])[1]',
    name: '#name',
    slug: '#slug',
    select_products: '//div[text()="Select products"]',
    submit: '//button[@type="submit"]',

    yes: '//span[text()="Yes"]',
    wcom_map: '//p[text()="WooCommerce + WooCommerce API Manager"]',
    use_appsero: '//strong[text()="Use Appsero"]',
    select_website: '//div[text()="Select Website"]',
    select_product: '//div[text()="Select Product"]',

    next: '//span[contains(text(), "Next")]',
};

let product_finding_locator: {
    search, search_project, settings, edit, update_plugin, plugin_navigate, update_theme, theme_navigate, update_bundle, bundle_navigate,
    name, version, php_version_select, php_version, wp_version_select, wp_version, tested_upto_version_select, tested_upto_version,
    delete, yes: string } = {
        
    search: '.header-project-switch',
    search_project: '//input[@placeholder="Search Project"]',
    settings: '//span[text()="Settings"]',
    edit: '//a[contains(text(),"Edit")]',

    update_plugin: '//span[text()="Update plugin"]',
    plugin_navigate: '//span[text()="Plugins"]',
    update_theme: '//span[text()="Update theme"]',
    theme_navigate: '//span[text()="Themes"]',
    update_bundle: '//span[text()="Update bundle"]',
    bundle_navigate: '//span[text()="Bundles"]',
    name: '#name',
    version: '#version',
    php_version_select: '(//div[@class="ant-select-selection__rendered"])[1]',
    php_version: '(//input[@autocomplete="off"])[1]',
    wp_version_select: '(//div[@class="ant-select-selection__rendered"])[2]',
    wp_version: '(//input[@autocomplete="off"])[2]',
    tested_upto_version_select: '(//div[@class="ant-select-selection__rendered"])[3]',
    tested_upto_version: '(//input[@autocomplete="off"])[3]',

    delete: '//span[text()="Delete"]',
    yes: '//span[text()="Yes"]',
};

let dashboard_locator: {
    plugin_count, theme_count, bundle_count, net_revenue, number_of_orders, total_active_licenses, deactivations, refunds,
    top_selling_product, top_deactivation_reason, new_installs, total_installs, revenue_via_coupon, avg_order_value, todays_revenue,
    todays_new_subscriptions, todays_new_orders, todays_refunds: string } = {
        
    plugin_count: '//p[text()="Plugins"]/../h3[@class="project-number"]',
    theme_count: '//p[text()="Themes"]/../h3[@class="project-number"]',
    bundle_count: '//p[text()="Bundles"]/../h3[@class="project-number"]',

    net_revenue: '//h2[text()="Net Revenue"]/../h1',
    number_of_orders: '//h2[text()="Number of Orders"]/../h1',
    total_active_licenses: '//h2[text()="Total Active Licenses"]/../h1',
    deactivations: '//h2[text()="Deactivations"]/../h1',
    refunds: '//h2[text()="Refunds"]/../h1',

    top_selling_product : '(//h4[contains(text(), "Top Selling Products")]/../div//tr[1]/td)[1]',
    top_deactivation_reason : '//h4[contains(text(), "Top Deactivation Reasons")]/..//li[1]//span[1]',

    new_installs: '//h2[text()="New Installs"]/../div/h1',
    total_installs: '//h2[text()="Total Installs"]/../div/h1',
    revenue_via_coupon: '//h2[text()="Revenue via Coupon"]/../div/h1',
    avg_order_value: '//h2[text()="Avg Order Value"]/../div/h1',

    todays_revenue: '//h2[text()="Revenue"]/../div/span',
    todays_new_subscriptions: '//h2[text()="New Subscriptions"]/../div/span',
    todays_new_orders: '//h2[text()="New Orders"]/../div/span',
    todays_refunds: '(//h2[text()="Refunds"]/../div/span)[2]',

};

export { login_locator, plugin_locator, theme_locator, bundle_locator, product_finding_locator, dashboard_locator };