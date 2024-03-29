package com.spring.model;

import java.math.BigInteger;

/**
 * 组织机构
 * @author gpyf16
 *
 */
public class Insframework {
	private BigInteger id;
	private String name;
	private String logogram;
	private String code;
	private BigInteger parent;
	private int type;
	private String typename;
	private String creator;
	private String modifier;
	
	public String getCreator() {
		return creator;
	}
	public void setCreator(String creator) {
		this.creator = creator;
	}
	public String getModifier() {
		return modifier;
	}
	public void setModifier(String modifier) {
		this.modifier = modifier;
	}
	public String getTypename() {
		return typename;
	}
	public void setTypename(String typename) {
		this.typename = typename;
	}
	public BigInteger getId() {
		return id;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLogogram() {
		return logogram;
	}
	public void setLogogram(String logogram) {
		this.logogram = logogram;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public BigInteger getParent() {
		return parent;
	}
	public void setParent(BigInteger parent) {
		this.parent = parent;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	
}
