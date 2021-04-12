<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'zootek' );

/** MySQL database username */
define( 'DB_USER', 'zootek' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Zootekna2020' );

/** MySQL hostname */
define( 'DB_HOST', 'zootek.mysql.dbaas.com.br' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ';&+b6B.DL&Su,JHO+3Re1$,.e|tkM t5~/eT7)Hm_/W  UEF>dT)8$u_u^JOGA3v' );
define( 'SECURE_AUTH_KEY',   'P/IE$IF-!Yq*;[6f|(h3L1hXYiZ`Fz;GLE/GE+V0!X q7W1suDN,S^d*yN?A&YV4' );
define( 'LOGGED_IN_KEY',     '39HeS0usw62a h5k?0lbSk{E~q3S_t-gJ1]&iOIPxGrsrG4IGHu=3DSWMFp~6r;S' );
define( 'NONCE_KEY',         't`jF^UtWo+s7k1r9_GII]o9A&GYj@IU5Nk,3rUB{A;tI`4*gJSHec>#Im.;J5a0(' );
define( 'AUTH_SALT',         'F4[r29Y?YZpfK$):q`2!l.84CfANup,8+b4x(VAO07|i+$8n4,]ckug|r_9_[5%h' );
define( 'SECURE_AUTH_SALT',  'MQ+#z+)BFNUxyw8 $eCfH7#PY>dO/ ,?*dYa(ou4a<BW<^ X$nyk@.m$}U08bZ{e' );
define( 'LOGGED_IN_SALT',    '/3W<IM*ti,8v#@/ +]w-@$T_0MCwiC %OZQu5lm6k68-a#xAB?c8MJ(T&T13-9nl' );
define( 'NONCE_SALT',        '4L[cp|ye6ph1oMxM7q>i93RW5r.6z/[/U[1}Zj$oU^_d;- |IzI5o%<=9(-vss<&' );
define( 'WP_CACHE_KEY_SALT', '[jj.<E,.X8PMGBdxuDo1Dk$!hA)c`$Y]RefZ@|awAQVTi:X27uAI2D>Y-!ut$Mr3' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wordpress_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
