from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in shipper/__init__.py
from shipper import __version__ as version

setup(
	name="shipper",
	version=version,
	description="Shipper API for Frappe",
	author="Aslam",
	author_email="iupin5212@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
